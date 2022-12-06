<script lang="ts">
	import Router, { location, link } from 'svelte-spa-router'; 
    import LandingConditional from './Pages/LandingConditional.svelte';
</script>

<Router routes={{
	'/': LandingConditional,
}} />

<!-- {$location} -->