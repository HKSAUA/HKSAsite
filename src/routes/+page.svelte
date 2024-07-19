<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/helpme.webp';
	import welcome_fallback from '$lib/images/helpme.png';
	import Divider from "./Divider.svelte";
</script>

<svelte:head>
	<title>HKSA</title>
	<meta name="description" content="Hong Kong Students' Association" />
</svelte:head>

<section>
	<h1>
		<strong>HKSAUA</strong><br />
	</h1>
	<h2>
		Hong Kong Students' Association
	</h2>

	<!--<Counter />-->
</section>
<Divider />
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
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
