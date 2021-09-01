import App from './App.svelte';

const app = new App({
	target: document.getElementById(123),
	props: {
		name: 'world'
	}
});

export default app;