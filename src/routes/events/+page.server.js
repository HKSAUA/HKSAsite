

/** @type {import('./$types').Actions} */
export const actions = {
    eventbriteAuth: async (event) => {
        console.log("request fired")
        const response = await fetch("https://www.eventbriteapi.com/v3/users/me/organizations/", {
            method: "GET",
            headers: {
                "Authorization": 'Bearer A7TY3LKNC7EKJGFEY2FY3FGLSPWFEPKXMZEZZIIWFYC35WU2H2',
            },

        })
        console.log("aaaaaaaaaaaaaa", response, process.env.eventbrite_key)
    }
};