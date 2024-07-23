import { createClient } from "@supabase/supabase-js";

let supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
let supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
        