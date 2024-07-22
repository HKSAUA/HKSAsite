<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import { fade } from 'svelte/transition';
	import Divider from "./Divider.svelte";

	export let data;

</script>


<div class="app">

	<Header />
	<div>
		<main>
			<div class="has-words">
				{#key data.pathname}
				<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
					<slot />
					
				</div>
				
				{/key}
			</div>
				
			<Divider />

			
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
		
		margin: 0 auto;

	}

	.has-words {
		max-width: 64rem;
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
	}

</style>
