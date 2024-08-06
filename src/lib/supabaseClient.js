import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'

console.log("HEP")
const supabaseUrl = SUPABASE_URL;
console.log(supabaseUrl);
const supabaseKey = SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
// export default supabase;