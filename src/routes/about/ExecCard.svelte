<script>
    import execData from "./data.json"
</script>

<div>
    <div class="row">
        {#each execData as exec}
        <div class="column">
            <div class="card">
                    <picture>
                        <source
                            srcset={"/execAssets/" + exec.name + ".png"}
                            type="image/png"/>
                        <img
                            src={"/execAssets/" + exec.name + ".png"}
                            alt={exec.name}
                            style="width:100%"/>
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
        width: 30%;
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
    @font-face {
        font-family: "Integral CF Regular";
        src: url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.eot");
        src: url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.svg#Integral CF Regular")format("svg");
    }
    h3, p {
        font-family: "Arial";
    }
</style>