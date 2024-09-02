<script>


</script>

<div class="Signup">
    <h2>become a member</h2>


        <form method="POST">
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
            />
            <input
                placeholder="Confirm Email"
                type="text"
                name="emailConfirmation"
            ><br>
            <label for="status">Status</label>
            <select name="status">
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Faculty">Faculty</option>
                <option value="Alumni">Alumni</option>
            </select>
            <button>Sign up</button>
        </form>
</div>

<style>
    .Signup {
        align-content: center;
        padding:0px;
    }
</style>