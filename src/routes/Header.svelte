<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/HKSA-logo.png';

</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Home"/>
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/join' ? 'page' : undefined}>
				<a href="/join">Join us</a>
			</li>
			<li aria-current={$page.url.pathname === '/events' ? 'page' : undefined}>
				<a href="/events">Events</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>

	</nav>

</header>

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
	header {
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
		font-family: "Integral CF Regular"
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	img {
		width: 10em;
		height: 10em;
		display: block;
		position: fixed;
		top: 10px;
		left: 10px
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 24px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
