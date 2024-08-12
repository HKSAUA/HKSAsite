<script>


</script>

<div class="Signup">
    <h2>become a member</h2>
    <p>you actually can now <br>it actually works with db now holy hell</p>

    {#if $currentUser}
        <p>signed in as {currentUser.firstname}</p>
        {:else}
        <form method="POST" on:submit|preventDefault>
            <input
                    placeholder="First Name"
                    type="text"
                    name="fName"
            />
            <input
                    placeholder="Last Name"
                    type="text"
                    name="lName"
            /><br>
            <input
                    placeholder="Email"
                    type="text"
                    name="email"
            /><br>
            <label for="status">Status</label>
            <select name="status">
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Faculty">Faculty</option>
                <option value="Alumni">Alumni</option>
            </select>
        </form>
        <button>Sign up</button>
    {/if}
    { statusMessage }
</div>