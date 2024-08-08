import { supabase } from "../../lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
export async function load({  }) {
    let { data: executives, error } = await supabase
            .from('executives')
            .select('*')
	return {
		data
	};
}