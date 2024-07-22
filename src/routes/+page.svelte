<script>
	import './styles.css';
	import Divider from "./Divider.svelte";
	import { onMount } from "svelte";
	import FrontJoin from "./FrontJoin.svelte";

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

<section></section>
	<h1>
		<span style="font-size: { frontHeaderFont }px"><strong>HKSAUA</strong></span><br />
	</h1>
	<h2><strong>Hong Kong Students' Association</strong></h2>

	<!--<Counter />-->
<FrontJoin />
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
