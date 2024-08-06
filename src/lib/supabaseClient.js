import { createClient } from "@supabase/supabase-js";
// import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'

const supabaseUrl = process.env.SUPABASE_URL;
console.log(supabaseUrl);
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
// export default supabase;