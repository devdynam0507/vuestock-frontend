<script lang="ts">
    import StockInfoComponent from "./StockInfoComponent.svelte";
    export let stockName: string;
    export let stockCurrentPrice: number;
    export let isRise: boolean;
    export let stockPrice: number;
    export let volatility: number;
</script>

<style>
    header {
        font-weight: 700;
        font-size: small;
        color: black;
    }

    article {
        font-weight: 800;
        font-size: large;
        color: black;
    }
</style>

<header>{stockName}</header>
<article>{stockCurrentPrice.toLocaleString('ko-KR')}</article>
<StockInfoComponent isRise={isRise} stockPrice={stockPrice} volatility={volatility} />