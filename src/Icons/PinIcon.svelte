<script lang="ts">
    export let isPinned: boolean = false;
    export let stockCode: string;

    let color: string = isPinned ? '#FBC63E' : 'rgba(0, 0, 0, 0.8)';

    async function pin(): Promise<void> {
        const newStcok = stockCode.replace('a', '');
    }
</script>

<style>
    i {
        font-size: medium;
        cursor: pointer;
    }
</style>

<i class="mi mi-pin" style="color: {color}"></i>
