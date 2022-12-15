<script lang="ts">
    import { onMount } from "svelte";
    import { isLoggedIn } from "../Api/Authentication";
    import Landing from "./Landing.svelte";
    import Main from "./Main.svelte";

    let loginStatus: boolean = false;
    onMount(async () => {
        loginStatus = await isLoggedIn();
    })
</script>

{#if loginStatus} 
    <Main/>
{:else}
    <Landing/>
{/if}