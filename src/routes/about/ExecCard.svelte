<script>
    import { onMount, onDestroy } from "svelte";

    let execs = [];

    onMount(async () => {
        const resultExecs = await pb.collection('executives').getList(1,50);
        execs = resultExecs.items;
        console.log("SKREEEEEE", execs);
    })

</script>

<div>
    <div class="row">
        {#each execs as exec}
        <div class="column">
            <div class="card">
                    <picture>
                        <source srcset={"http://127.0.0.1:8090/api/files/executives/" + exec.id + "/" + exec.image} type="image/png"/>
                        <img src={"http://127.0.0.1:8090/api/files/executives/" + exec.id + "/" + exec.image} alt={exec.name} style="width:100%"/>
                    </picture>
                    <div class="container">
                        <h3>{exec.name}</h3>
                        <p class="title">{exec.title}</p>
                        <p>{exec.bio}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>

</div>


<style>

    *, *:before, *:after {
        box-sizing: inherit;
    }

    .column {
        float: left;
        width: 33.3%;
        margin-bottom: 16px;
        padding: 0 8px;
    }

    @media screen and (max-width: 650px) {
        .column {
            width: 100%;
            display: block;
        }
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
        padding: 0 16px;
    }

    .container::after, .row::after {
        content: "";
        clear: both;
        display: table;
    }

    .title {
        color: grey;
    }
</style>