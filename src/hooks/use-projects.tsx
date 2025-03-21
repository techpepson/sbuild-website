
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
      
      // Only apply category filter if a specific category is selected and it's not 'all'
      if (category && category !== 'all' && category !== 'All Categories') {
        query = query.eq('category', category);
        console.log(`Filtering projects by category: ${category}`);
      } else {
        console.log('Fetching all projects (no category filter)');
      }
      
      const { data, error } = await query.order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching projects:', error);
        throw new Error(error.message);
      }
      
      console.log(`Fetched ${data?.length || 0} projects with category filter: ${category || 'all'}`);
      
      // If no data returned, return empty array instead of null
      return data || [];
    },
    refetchOnWindowFocus: false, // Prevent refetching when window regains focus
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
