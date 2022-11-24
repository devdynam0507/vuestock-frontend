<script lang="ts">
    import BorderButton from "../Buttons/BorderButton.svelte";
    import ToggleSwitch from "../Buttons/ToggleSwitch.svelte";
    import ImageComponent from "../Components/ImageComponent.svelte";
    import SearchComponent from "../Components/SearchComponent.svelte";
</script>

<div class="content">
    <div class="content-body">
        <nav>
            <ToggleSwitch label={"알람"}/>
            <BorderButton text={"마이페이지"} textColor={"white"}/>
        </nav>
        <header>
            <ImageComponent width={'200px'} height={'22px'} src={"images/logo.png"} alt={"logo"}/>
            <SearchComponent/>
        </header>
    </div>
</div>

<style>
    .content {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
    }

    .content-body {
        width: 50%;
        height: 100%;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    nav {
        height: 5%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px
    }
</style>