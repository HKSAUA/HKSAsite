<script>
	import './styles.css';
	import Divider from "./Divider.svelte";
	import { onMount } from "svelte";
	import FrontJoin from "./FrontJoin.svelte";
	import FrontInfo from './FrontInfo.svelte';

	let frontHeaderFont = 350;
	onMount(() => {
		const updateFontSize = () => {
			const width = window.innerWidth;
			frontHeaderFont = Math.min(width / 10, 350);
		}
		window.addEventListener('resize', updateFontSize())
		updateFontSize()
	})

</script>

<svelte:head>
	<title>HKSA</title>
	<meta name="description" content="Hong Kong Students' Association" />
</svelte:head>
	<section><h1>
		<span style="font-size: { frontHeaderFont }px"><span style="font-family: 'Integral CF Regular'">HKSAUA</span></span><br />
	</h1></section>
	<section>
		<h2><strong>Hong Kong Students' Association</strong></h2>
	</section>
	<!--<Counter />-->
	<section><Divider /></section>

	<FrontJoin />
	<Divider />
	<FrontInfo />
<style>
	section {
		@font-face {
			font-family: "Integral CF Regular";
			src: url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.eot");
			src: url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.eot?#iefix")format("embedded-opentype"),
			url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.woff2")format("woff2"),
			url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.woff")format("woff"),
			url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.ttf")format("truetype"),
			url("https://db.onlinewebfonts.com/t/f1fcc5aed1e20fc0cdb9f8a7573625bd.svg#Integral CF Regular")format("svg");
		}
		display: flex;

		justify-content: center;
		align-items: center;
		flex: 1;
		margin: 0 auto;
	}

</style>
