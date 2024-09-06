import {supabase} from "$lib/supabaseClient.js";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { data:fetchedData } = await supabase.from("events");
    return {
        props:{
            data: fetchedData
        }
    }
}

