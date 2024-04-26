<script>
    import { onMount, onDestroy } from "svelte";
    import { currentUser, pb } from "$lib/pocketbase.js";

    let allEvents = [];

    onMount(async () => {
        const grabbedEvents = await pb.collection("events").getList;
    })
</script>