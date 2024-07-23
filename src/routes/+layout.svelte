<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import { fade } from 'svelte/transition';
	import Divider from "./Divider.svelte";
	import FrontJoin from './FrontJoin.svelte';

	export let data;

</script>


<div class="app">

	<Header />
	<div>
		<main>
		
			{#key data.pathname}
			<div class="has-words">
				<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
					<slot />
					
				</div>
			</div>
			
			{/key}
		</main>		
	</div>
	
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
		

		width: 100%;
		text-align: center;
		margin: 0 auto;

	}

	.has-words {
		max-width: 64rem;
		display: flex;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
	}

</style>
