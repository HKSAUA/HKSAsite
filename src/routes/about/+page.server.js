import { error, json } from "@sveltejs/kit"
import { supabase } from "../../lib/supabaseClient";


export async function load() {

    try {
        const { data, error } = await supabase
        .from('executives')
        .select('*');
        console.log(data)
        if (error) {
            throw error
        }
        return { props: { executives: json(data) } };
        
    }
    catch (err) {

        console.error(err)
        throw error;
    }
}