<script lang="ts"></script>

<style>
    .card-default {
        display: flex;
        height: 80px;
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

    .card-default .right i {
        font-size: large;
        cursor: pointer;
    }
</style>

<div class="card-default">
    <div class="left">
        <slot></slot>
    </div>
    <div class="right">
        <i class="mi mi-pin"></i>
    </div>
</div>