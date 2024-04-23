<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { fade } from 'svelte/transition';

	export let data;

</script>


<div class="app">

	<Header />

	<main>
		{#key data.pathname}
			<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
				<slot />
			</div>
		{/key}
	</main>

	<footer>
		<div class="left">
			<a href="https://www.instagram.com/hksaua/" target="_blank">Instagram</a>
			|
			<a href="https://alberta.campuslabs.ca/engage/organization/hksaua" target="_blank">BearsDen</a><br/>

		</div>
	</footer>
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	left {
		float: left;
		width: 300px;
		border: 3px solid #73AD21;
		padding: 10px;
	}
</style>
