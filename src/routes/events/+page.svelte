<script>
    import EventCard from "./EventCard.svelte";
    import Preview from "../Preview.svelte";
    import {currentUser} from "$lib/pocketbase.js";

</script>

<svelte:head>
    <title>Events</title>
    <meta name="description" content="Events" />
</svelte:head>

<body>

    <div>
        <h1>Events</h1>
    </div>
    {#if $currentUser}
    <EventCard />
    {/if}
<Preview/>
</body>