

/** @type {import('./$types').Actions} */
export const actions = {
    eventbriteAuth: async (event) => {
        console.log("request fired")
        const response = await fetch("https://www.eventbriteapi.com/v3/users/me/organizations/", {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer [PRIVATE TOKEN]`
            },

        }).then((response) => {
            response.json().then((jsondFile) => {
                console.log(jsondFile);
            });
        })
    }
};