<script>
	import rmlo from '$lib/images/rmlo-exec-img.png';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About HKSA?" />
	<style>
		html {
			box-sizing: border-box;
		}

		*, *:before, *:after {
			box-sizing: inherit;
		}

		.column {
			float: left;
			width: 33.3%;
			margin-bottom: 16px;
			padding: 0 8px;
		}

		@media screen and (max-width: 650px) {
			.column {
				width: 100%;
				display: block;
			}
		}

		.card {
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		}

		.container {
			padding: 0 16px;
		}

		.container::after, .row::after {
			content: "";
			clear: both;
			display: table;
		}

		.title {
			color: grey;
		}

		.button {
			border: none;
			outline: 0;
			display: inline-block;
			padding: 8px;
			color: white;
			background-color: #000;
			text-align: center;
			cursor: pointer;
			width: 100%;
		}

		.button:hover {
			background-color: #555;
		}
	</style>

</svelte:head>

<div class="text-column" style="text-align:center">
	<h1>About this page</h1>

	<p>
		This is just a sample page to demonstrate my skills (or lack thereof) to literally nobody.
	</p>

	<p>
		If you want to see what I've done, here's my <a href="https://github.com/ShiNLea">github profile</a>.
	</p>
	<div>
		<h3>Executives</h3>
	</div>
</div>

<div class="row">
	<div class="column">
		<div class="card">
			<picture>
				<source srcset={rmlo} type="image/png"/>
				<img src="$lib/images/rmlo-exec-img.png" alt="look at funny depressed man doing funny depressed things" style="width:100%"/>
			</picture>
			<div class="container">
				<h3>tall lanky ffxiv addict</h3>
				<p class="title">VP Operations</p>
				<p>lorem ipsum something something i forgor the rest of the text</p>
			</div>

		</div>
	</div>
</div>
