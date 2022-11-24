<script lang="ts">
    export let text: string;
    export let textColor: string;
</script>

<style>
    .border-button {
        display: flex;
        width: 60px;
        height: 20px;
        border-radius: 15px;
        background-color: black;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .border-button p {
        user-select: none;
    }
</style>

<div class="border-button">
    <p style="color: {textColor}; font-size: x-small;">{text}</p>
</div>