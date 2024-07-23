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



	<section><h1>
		<span style="font-size: { frontHeaderFont }px">HKSAUA</span><br />
	</h1></section>
	<section>
		<h2><strong>Hong Kong Students' Association</strong></h2>
	</section>
	<!--<Counter />-->
	<section><Divider /></section>

<FrontJoin />
<style>
	section {
		display: flex;

		justify-content: center;
		align-items: center;
		flex: 1;
		margin: 0 auto;
	}

</style>
