<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import { fade } from 'svelte/transition';

	export let data;

</script>


<div class="app">
	

	<main>
		{#key data.pathname}
			<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
				<slot />
			</div>
		{/key}
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
