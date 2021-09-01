<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: #1c1c1c;
	}

	h1 {
		color: #33ff;
		text-transform: uppercase;
		font-size: 9em;
		font-weight: 100;

	}

	p {
		color: white;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>