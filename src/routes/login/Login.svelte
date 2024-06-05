<script>
    import { currentUser, pb} from "$lib/pocketbase.js";

    let email;
    let password;

    async function login() {
        await pb.collection('users').authWithPassword(email,password);
    }

</script>

<div>
    <h3>Login</h3>
    <form>

    </form>

</div>