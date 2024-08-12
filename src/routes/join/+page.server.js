import {supabase} from "$lib/supabaseClient.js";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
        const data = await event.request.formData();
        try {
            // sending request to DB
            const {downstreamData, error} = await supabase
            .from('members')
            .insert([
                {
                    first_name: data.get("fName"),
                    last_name: data.get("lName"),
                    email: data.get("email"),
                    status: data.get("status")
                }
            ])
            .select();
        }
        catch (error) {
            console.log(error)
        }
        
        console.log("help")
	}
};