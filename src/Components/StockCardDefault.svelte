<script lang="ts">
</script>

<style>
    .card-default {
        display: flex;
        flex-direction: column;
        /* height: 80px; */
        height: fit-content;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 20px;
    }

    .card-default .left {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .card-default .right {
        display: flex;
        width: 20%;
        justify-content: flex-end;
    }
    
    .card-default .header {
        display: flex;
    }
</style>

<div class="card-default">
    <div class="header">
        <div class="left">
            <slot name="header"></slot>
        </div>
        <div class="right">
            <slot name="pin"></slot>
        </div>
    </div>
    <slot name="graph"></slot>
    <slot name="input"></slot>
</div>