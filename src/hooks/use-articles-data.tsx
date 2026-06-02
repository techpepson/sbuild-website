import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { DUMMY_INSIGHT_ARTICLES } from "@/data/dummy-insights";

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

export function useArticles(category?: string) {
  return useQuery({
    queryKey: ["articles", category],
    queryFn: async (): Promise<Article[]> => {
      const hasSupabaseEnv = Boolean(
        import.meta.env.VITE_SUPABASE_URL &&
        import.meta.env.VITE_SUPABASE_ANON_KEY,
      );

      if (!hasSupabaseEnv) {
        const filtered =
          category && category !== "All Categories"
            ? DUMMY_INSIGHT_ARTICLES.filter((a) => a.category === category)
            : DUMMY_INSIGHT_ARTICLES;

        return [...filtered];
      }

      try {
        let query = supabase.from("articles").select("*");

        if (category && category !== "All Categories") {
          query = query.eq("category", category);
        }

        // Prefer a stable timestamp for ordering (exists on all rows).
        const { data, error } = await query.order("created_at", {
          ascending: false,
        });

        if (error) {
          console.error("Error fetching articles:", error);
          throw new Error(error.message);
        }

        return data || [];
      } catch (err) {
        // Supabase JS returns TypeError("Failed to fetch") for network/DNS/CORS failures.
        const message = err instanceof Error ? err.message : String(err);
        if (
          message.includes("Failed to fetch") ||
          message.includes("NetworkError")
        ) {
          console.error("Error fetching articles:", err);
          throw new Error(
            "Unable to reach the articles backend (network/DNS). Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to a valid Supabase project, then restart the dev server.",
          );
        }
        throw err;
      }
    },
    refetchOnWindowFocus: false,
  });
}

export function useArticle(id: string) {
  return useQuery({
    queryKey: ["article", id],
    queryFn: async (): Promise<Article | null> => {
      const hasSupabaseEnv = Boolean(
        import.meta.env.VITE_SUPABASE_URL &&
        import.meta.env.VITE_SUPABASE_ANON_KEY,
      );

      if (!hasSupabaseEnv) {
        return DUMMY_INSIGHT_ARTICLES.find((a) => a.id === id) ?? null;
      }

      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching article:", error);
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!id,
  });
}
