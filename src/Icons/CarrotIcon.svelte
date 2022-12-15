<script lang="ts">
    export let stockDiff: number = 0;

    let color: string = "";
    if (stockDiff > 0) {
        color = "red";
    }
    else if (stockDiff < 0) {
        color = "blue";
    }
    else {
        color = "rgba(0, 0, 0, 0.7)";
    }
</script>

{#if stockDiff > 0}
    <i class="mi mi-caret-up" style="color: {color}"></i>
{:else if stockDiff < 0}
    <i class="mi mi-caret-down" style="color: {color}"></i>
{:else}
    <p style="color: {color}; margin: 0; padding: 0">-</p>
{/if}