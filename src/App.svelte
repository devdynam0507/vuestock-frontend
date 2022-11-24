<script lang="ts">
	import Router, { location, link } from 'svelte-spa-router'; 
    import Landing from "./Pages/Landing.svelte";
    import Main from './Pages/Main.svelte';
</script>

<Router routes={{
	'/': Landing,
	'/main': Main
}} />

<!-- {$location} -->