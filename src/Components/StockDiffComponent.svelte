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

<style>
    p {
        font-weight: 500;
    }
</style>

<p style="color: {color}">({stockDiff}%)</p>