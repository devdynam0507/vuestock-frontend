<script lang="ts">
    export let isRise: boolean;
    export let stockPrice: number;
    export let volatility: number;

    let color = isRise ? "rgba(255, 0, 0, 0.8)" : "rgba(0, 0, 255, 0.8)";
</script>

<style>
    .stock-info {
        display: flex;
        gap: 1px;
        margin: 0;
        padding: 0;
    }
</style>

<div class="stock-info">
    <p style="color: {color}">{stockPrice.toLocaleString('ko-KR')}</p>
    {#if isRise}
        <p style="color: {color}"><i class="mi mi-caret-up"></i></p>
    {:else}
        <p style="color: {color}"><i class="mi mi-caret-down"></i></p>
    {/if}
    <p style="color: {color}">({volatility}%)</p>
</div>