import {supabase} from "$lib/supabaseClient.js";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
        const data = await event.request.formData();
        try {
            // sending request to DB
            if (!(data.get("email") === data.get("emailConfirmation"))) {
                throw new Error("Emails must match.")
            }
            const {downstreamData, error} = await supabase
            .from('people')
            .insert([
                {
                    first_name: data.get("fName"),
                    last_name: data.get("lName"),
                    email: data.get("email"),
                    status: data.get("status"),
                    is_member: 1
                }
            ])
            .select();
            return {
                status:200,
                body: {
                    success: true,
                    message: "Registration successful!"
                }
            }
        }
        catch (error) {
            console.log(error);
            return {
                status:500,
                body: {
                    success: false,
                    message: error
                }
            }
        }
	}
};