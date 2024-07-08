<script>
    import { currentUser, pb } from "$lib/pocketbase.js";

    let firstName;
    let lastName;
    let email;
    let status;
    let password;
    let passwordConfirm;
    let statusMessage = "";

    async function signUp() {
        try {
            const data = {
                "firstname":firstName,
                "lastname":lastName,
                email,
                status,
                password,
                passwordConfirm,

            };
            const createMember = await pb.collection("members").create(data);

        } catch (error) {
            console.log(error);
            statusMessage = error;
        }
        console.log("User", firstName, lastName, "created")
    }
</script>

<div class="Signup">
    <h1>become a member</h1>
    <p>you actually can now <br>it actually works with db now holy hell</p>

    {#if $currentUser}
        <p>signed in as {currentUser.firstname}</p>
        {:else}
        <form on:submit|preventDefault>
            <input
                    placeholder="First Name"
                    type="text"
                    bind:value={firstName}
            />
            <input
                    placeholder="Last Name"
                    type="text"
                    bind:value={lastName}
            /><br>
            <input
                    placeholder="Email"
                    type="text"
                    bind:value={email}
            /><br>
            <input
                placeholder="Password"
                type="password"
                bind:value={password}
            />
            <input
                    placeholder="Confirm password"
                    type="password"
                    bind:value={passwordConfirm}
            />
            <label for="status">Status</label>
            <select
                bind:value={status}>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Faculty">Faculty</option>
                <option value="Alumni">Alumni</option>
            </select>
        </form>
        <button on:click={signUp}>Sign up</button>
    {/if}
    { statusMessage }
</div>