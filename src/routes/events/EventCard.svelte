<script>
    import { onMount, onDestroy } from "svelte";
    import { currentUser, pb } from "$lib/pocketbase.js";
    import Carousel from 'svelte-carousel';

    let allEvents = [];

    onMount(async () => {
        const grabbedEvents = await pb.collection("events").getList(1,50, {
            sort:'-date',
        });
        allEvents = grabbedEvents.items;
        console.log("Events loaded", allEvents);
    })

</script>

<div>
    <div class="column">
        {#each allEvents as event}
            <div id="container">
                <div id="imgContent" class="center">
                    <Carousel>
                        {#each event.images as image}
                            <div class="eventMedia">
                                <picture>
                                    <source
                                            srcset={"http://127.0.0.1:8090/api/files/events/" + event.id + "/" + image}
                                            type = "image/png"/>
                                    <img
                                            src={"http://127.0.0.1:8090/api/files/events/" + image}
                                            alt={image}
                                            style="width:50%">
                                </picture>
                            </div>
                        {/each}
                    </Carousel>
                </div>
                <div id="eventContent">
                    <h1>{event.name}</h1><br>
                    <h3>When: {event.date}</h3>
                    <p>Description<br>{event.description}</p>
                    <form method="POST" action="?/eventbriteAuth">
                        <button >HELP ME</button>
                    </form>

                </div>
            </div>
            <br>
        {/each}
    </div>
</div>

<style>
    * {
        margin:0;
        padding:0;
    }
    #container {
        height:100%;
        width: 100%;
        font-size: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    #imgContent {
        display: inline-block;
        *display: inline;
        zoom: 1;
        width:50%;
        font-size: 0px;
    }
    #eventContent {
        display: inline-block;
        *display: inline;
        zoom: 1;
        vertical-align: top;
        width:50%;
        font-size: 16px;
    }
    .eventMedia {
        margin: 12px;
        position: relative;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .center {
        margin-left: auto;
        margin-right: auto;
    }
</style>