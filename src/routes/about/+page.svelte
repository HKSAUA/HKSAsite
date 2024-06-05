<script>
	import ExecCard from "./ExecCard.svelte";
	import {currentUser} from "$lib/pocketbase.js";
	import Preview from "../Preview.svelte";
</script>

<svelte:head>
	<title>About HKSAUA</title>
	<meta name="description" content="About HKSA?" />

</svelte:head>


<body>
	<div class="text-column" style="text-align:center">
		<h1>About HKSA (wip lol)</h1>
		{#if $currentUser}
		<p>
			This is just a sample page to demonstrate my skills (or lack thereof) to literally nobody.
		</p>
		<p>
			If you want to see what I've done, here's my <a href="https://github.com/ShiNLea">github profile</a>.
		</p>
		<div>
			<h3>Executives</h3>
		</div>
		{/if}
	</div>
	<ExecCard />
	<Preview/>
</body>

