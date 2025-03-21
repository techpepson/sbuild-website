
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type Article = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  date: string;
  read_time: string;
  author: string;
  author_image?: string;
  author_role?: string;
};

export function useArticles() {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async (): Promise<Article[]> => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching articles:', error);
        throw new Error(error.message);
      }
      
      console.log(`Fetched ${data?.length || 0} articles`);
      return data || [];
    },
    refetchOnWindowFocus: false,
  });
}

export function useArticle(id: string) {
  return useQuery({
    queryKey: ['article', id],
    queryFn: async (): Promise<Article | null> => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching article:', error);
        throw new Error(error.message);
      }
      
      return data;
    },
    enabled: !!id,
  });
}
