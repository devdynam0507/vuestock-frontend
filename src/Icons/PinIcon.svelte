<script lang="ts">
    import { registerPin, deletePin } from "../Api/StockPin";
    export let isPinned: boolean = false;
    export let stockCode: string;

    let color: string = "";

    async function pinning(): Promise<void> {
        let result: boolean = false;
        if (isPinned) {
            result = await deletePin(stockCode);
        }
        else {
            result = await registerPin(stockCode);
        }
        if (result) {
            isPinned = !isPinned;
        }
        setColor();
    }

    function setColor() {
        color = isPinned ? '#FBC63E' : 'rgba(0, 0, 0, 0.8)';
    }
    setColor();
</script>

<style>
    i {
        font-size: medium;
        cursor: pointer;
    }
</style>

<i class="mi mi-pin" style="color: {color}" on:click={pinning}></i>
