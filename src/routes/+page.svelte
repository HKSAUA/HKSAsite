<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/gonna kms.png';
	import welcome_fallback from '$lib/images/gonna kms.png';
</script>

<svelte:head>
	<title>HKSA</title>
	<meta name="description" content="Hong Kong Students' Association" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		<strong>Hong Kong Students' Association</strong><br />
	</h1>
	<h2>
		University of <a href="https://www.ualberta.ca/toolkit/trademarks-licensing/student-groups.html" target="_blank">[redacted cuz trademark regulations lol]</a>
	</h2>

	<!--<Counter />-->
</section>

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
