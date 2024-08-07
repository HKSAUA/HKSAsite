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
			The Hong Kong Students' Association at the University of Alberta (HKSAUA) provides a vibrant community for students across campus.
			Through cultural events, social gatherings, and much more, HKSAUA fosters a welcoming environment where
			members can conenct, learn, and share experiences.
		</p>

		<div>
			<h3>Executives</h3>
		</div>
		{/if}
	</div>
	<ExecCard />
	<Preview/>
</body>

