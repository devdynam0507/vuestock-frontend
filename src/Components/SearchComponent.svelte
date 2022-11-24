<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>
<script lang="ts">
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
</style>

<div class="search">
    <i class="mi mi-search"></i>
    <input type="text">
</div>

