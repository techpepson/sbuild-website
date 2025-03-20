
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  read_time: string;
  author: string;
  category: string;
  image_url: string;
};

export function useArticles(category?: string) {
  return useQuery({
    queryKey: ['articles', category],
    queryFn: async (): Promise<Article[]> => {
      let query = supabase.from('articles').select('*');
      
      if (category && category !== 'All Categories') {
        query = query.eq('category', category);
      }
      
      const { data, error } = await query.order('date', { ascending: false });
      
      if (error) {
        console.error('Error fetching articles:', error);
        throw new Error(error.message);
      }
      
      return data || [];
    },
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
        .single();
      
      if (error) {
        console.error('Error fetching article:', error);
        if (error.code === 'PGRST116') {
          // Record not found
          return null;
        }
        throw new Error(error.message);
      }
      
      return data;
    },
    enabled: !!id,
  });
}
