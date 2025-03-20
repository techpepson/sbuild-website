
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type Project = {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  image_url: string;
  gradient: string;
  year: string;
  results: string[];
};

export function useProjects(category?: string) {
  return useQuery({
    queryKey: ['projects', category],
    queryFn: async (): Promise<Project[]> => {
      let query = supabase.from('projects').select('*');
      
      if (category && category !== 'all') {
        query = query.eq('category', category);
      }
      
      const { data, error } = await query.order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching projects:', error);
        throw new Error(error.message);
      }
      
      console.log(`Fetched ${data?.length || 0} projects with category filter: ${category || 'all'}`);
      return data || [];
    },
  });
}

export function useProject(id: string) {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async (): Promise<Project | null> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching project:', error);
        throw new Error(error.message);
      }
      
      return data;
    },
    enabled: !!id,
  });
}
