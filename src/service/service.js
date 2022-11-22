import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://edstsctbxkkfbvjuplac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkc3RzY3RieGtrZmJ2anVwbGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3NzYxNzUsImV4cCI6MTk4NDM1MjE3NX0.w5_UoGsM0qfxo75opLPEtcturyg3MNxyJMdDOlIhs44";
const supabase = createClient(supabaseUrl, supabaseKey);

export function produtosService() {
  return {
    getAllProdutos() {
      return supabase.from("Produtos").select("*");
    }
  };
}
