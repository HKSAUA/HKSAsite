import {supabase} from "$lib/supabaseClient.js";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
        const formData = await request.formData();

        // sending request to DB
		const {data, error} = await supabase
        .from('members')
        .insert([
            {
                first_name: formData.get("fName"),
                last_name: formData.get("lName"),
                email: formData.get("email"),
                status: formData.get("status")
            }
        ])
        .select();
        console.log("help")
	}
};