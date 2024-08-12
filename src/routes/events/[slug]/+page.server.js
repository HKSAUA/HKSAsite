import { supabase } from "../../../lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    return {
        //posts: await supabase.from
    }
}