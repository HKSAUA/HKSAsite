<script>
    import Login from './Login.svelte';
    import {currentUser} from "$lib/pocketbase.js";
    import Preview from "../Preview.svelte";
</script>
<svelte:head>
    <title>Login</title>
    <meta name="description" content="Log into your account" />
</svelte:head>
<h1>Login</h1>
{#if $currentUser}
    <div class="authentication">
        <h1>wait this isn't good yet whoopsies</h1>
        <p>I should really get on this seeing as we actually have a functioning database now</p>
    </div>
    <div>
        <Login/>
        <p>Not a member yet? <a href="/join">Join us here!</a></p>
    </div>
{/if}
<Preview/>