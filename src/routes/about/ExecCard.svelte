<script>
    import rmlo from "./assets/rmlo.png";
    import {execinfo} from "./assets/execinfo.js";
    function importPictureWTFFF(imgName) {
        import {execPicture} from "./assets/"
    }
</script>

<div>
    {#each execinfo as exec}
        <div class="row">
            <div class="column">
                <div class="card">

                        <picture>
                            <source srcset={"./assets/" + exec.ccid + ".png"} type="image/png"/>
                            <img src={"./assets/" + exec.ccid + ".png"} alt={exec.name} style="width:100%"/>
                        </picture>
                        <div class="container">
                            <h3>{exec.name}</h3>
                            <p class="title">{exec.title}</p>
                            <p>{exec.bio}</p>
                        </div>
                </div>
            </div>
        </div>
    {/each}
</div>


<style>
    html {
        box-sizing: border-box;
    }

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

    .button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
    }

    .button:hover {
        background-color: #555;
    }
</style>