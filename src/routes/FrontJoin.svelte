<script>
    import { onMount } from "svelte";
</script>

<div class="with-image">
    <div style="text-align: center; color: #FFFFFF; font-size: 36px; font-family: 'Integral CF Regular';">
        <strong>JOIN US</strong><br>
    </div>
    <p>Become a member today!</p><br>
    <p><button><a href="/join">Join now!</a></button></p>
</div>
<style>
    @font-face {
        font-family: "Integral CF Regular";
        src: url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.eot");
        src: url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.svg#Integral CF Regular")format("svg");
    }
    @font-face {
        font-family: "Helvetical Neue";
        src: url('src/lib/fonts/HelveticaNeueBlack.otf');
    }
    h2, p {
        text-align: center;
        color: #FFFFFF;
        font-size: 36px;
        font-family: 'Helvetical Neue';

    }
    button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 33px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        content-align: center;
        text-align: center;
        font-size: 36px;
        margin: 4px 2px;
        cursor: pointer;
        font-family: "Integral CF Regular";
        background-color: #E6AD37
    }
    a {
        font-size:36px;
        content-align: center;
        text-align: center;
        margin:0 auto;
    }

</style>