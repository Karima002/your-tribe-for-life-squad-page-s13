<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import { onNavigate } from '$app/navigation'; //https://svelte.dev/blog/view-transitions#Getting-started-with-view-transitions

	onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
