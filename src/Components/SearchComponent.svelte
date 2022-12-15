<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>
<script lang="ts">
    import { onMount } from "svelte";
    import { searchByStockName, StockSearchResultWithPrices } from "../Api/StockSearch";
    import CarrotIcon from "../Icons/CarrotIcon.svelte";
    import PinIcon from "../Icons/PinIcon.svelte";
    import { SearchInputCompleteDetector } from "../Service/SearchInputDectector";
    import StockDiffComponent from "./StockDiffComponent.svelte";

    let value: string = '';
    let isFocused: boolean = false;
    let isMouseEnter: boolean = false;
    let searchInputCompleteDetector: SearchInputCompleteDetector = null;
    let data: StockSearchResultWithPrices[] = [];
    let onFocusIn = () => isFocused = true;
    let onFocusOut = () => {
        isFocused = false;
        if (!isMouseEnter) {
            data.length = 0;
        } 
    }
    let onMouseEnter = () => isMouseEnter = true;
    let onMouseLeave = () => {
        isMouseEnter = false;
        if (!isFocused) {
            data.length = 0;
        }
    }

    let searchCompleteCallback = async (value: string) => {
        let responses = await searchByStockName(value);
        if (responses instanceof Array<StockSearchResultWithPrices>) {
            data = responses;
            console.log(data);
        }
    }

    onMount(() => {
        searchInputCompleteDetector = new SearchInputCompleteDetector({
            delaySecs: 1,
            input: document.getElementById("search-input") as HTMLInputElement,
            subscriber: searchCompleteCallback
        });
    })
</script>
<style>
    .search {
        width: 550px;
        text-align: center;
        margin: 0 auto;
        position: relative;
    }

    .search i {
        position: absolute;
        left: 15px;
        top: 22px;
        color:rgba(0, 0, 0, 0.3);
    }

    .search input {
        width: 100%;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin: 10px 0;
        padding: 10px 12px;
        padding-left: 40px;
        color:rgba(0, 0, 0, 0.6);
    }

    .search input:focus {
        outline-width: 0;
    }

    .search .search-bottom-box {
        position: absolute;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 1px solid #DFE1E5;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        gap: 1px;
        max-height: 300px;
        overflow-y: scroll;
    }

    .search .search-bottom-box i {
        position: static;
    }

    .search .search-bottom-box .list {
        display: flex;
        width: 100%;
        list-style: none;
        gap: 5px;
        align-items: center;
        padding-left: 40px;
    }

    .search .search-bottom-box p {
        align-items: center;
    }

    .search .search-bottom-box .list p {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
    }

    .empty {
        width: 100%;
        text-align: center;
        font-size: medium;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.3);
    }
</style>

<div class="search">
    <i class="mi mi-search"></i>
    <input id="search-input" type="text" bind:value={value} on:focusin={onFocusIn} on:focusout={onFocusOut}>
    {#if isFocused || isMouseEnter}
        <div class="search-bottom-box" on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
        {#if data.length > 0}
            {#each data as stock}
                <li class="list">
                    <p><PinIcon stockCode={stock.stockCode} isPinned={false}/></p>
                    <p>{stock.stockName}</p>
                    <p>{stock.stockPrice.currentPrice.toLocaleString('ko-KR')}원</p>
                    <p><b>{stock.stockPrice.previousDayPriceDiff.toLocaleString('ko-KR')}</b></p>
                    <p><CarrotIcon stockDiff={stock.stockPrice.previousDayPriceDiff}/></p>
                    <StockDiffComponent stockDiff={stock.stockPrice.priviousDayPriceDiffPercent}/>
                </li>
            {/each}
        {:else}
            <p class="empty">검색결과가 없습니다. 관심있는 주식 종목을 검색해보세요!</p>
        {/if}
        </div>
    {/if}
</div>

