<script lang="ts">
    import BorderButton from "../Buttons/BorderButton.svelte";
    import ToggleSwitch from "../Buttons/ToggleSwitch.svelte";
    import ImageComponent from "../Components/ImageComponent.svelte";
    import NoInterested from "../Components/NoInterested.svelte";
    import SearchComponent from "../Components/SearchComponent.svelte";
    import StockCardAlarmInput from "../Components/StockCardAlarmInput.svelte";
    import StockCardDefault from "../Components/StockCardDefault.svelte";
    import StockCardInfoDefault from "../Components/StockCardInfoDefault.svelte";
    import StockCardWithGraphAndInput from "../Components/StockCardWithGraphAndInput.svelte";
    import PinIcon from "../Icons/PinIcon.svelte";
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
        <div class="popular-container">
            <p>인기종목</p>
            <div class="popular-list">
                <StockCardDefault>
                    <StockCardInfoDefault 
                        slot="header"
                        stockName={"메가스터디 교육"}
                        stockCurrentPrice={79800}
                        isRise={true}
                        stockPrice={1200}
                        volatility={4.2}
                    />
                    <PinIcon
                        slot="pin"
                        isPinned={false}
                        stockCode={"005920"}
                    />
                </StockCardDefault>
                <StockCardDefault>
                    <StockCardInfoDefault 
                        slot="header"
                        stockName={"메가스터디 교육"}
                        stockCurrentPrice={79800}
                        isRise={false}
                        stockPrice={1200}
                        volatility={4.2}
                    />
                    <PinIcon
                        slot="pin"
                        isPinned={true}
                        stockCode={"005920"}
                    />
                </StockCardDefault>
                <StockCardDefault>
                    <StockCardInfoDefault 
                        slot="header"
                        stockName={"메가스터디 교육"}
                        stockCurrentPrice={79800}
                        isRise={true}
                        stockPrice={1200}
                        volatility={4.2}
                    />
                    <PinIcon
                        slot="pin"
                        isPinned={true}
                        stockCode={"005920"}
                    />
                </StockCardDefault>
                <StockCardDefault>
                    <StockCardInfoDefault 
                        slot="header"
                        stockName={"메가스터디 교육"}
                        stockCurrentPrice={79800}
                        isRise={true}
                        stockPrice={1200}
                        volatility={4.2}
                    />
                    <PinIcon
                        slot="pin"
                        isPinned={true}
                        stockCode={"005920"}
                    />
                </StockCardDefault>
            </div>
        </div>
        <div class="popular-container">
            <p>관심 종목</p>
            <div class="popular-list">
                <StockCardDefault>
                    <StockCardInfoDefault 
                        slot="header"
                        stockName={"메가스터디 교육"}
                        stockCurrentPrice={79800}
                        isRise={true}
                        stockPrice={1200}
                        volatility={4.2}
                    />
                    <PinIcon
                        slot="pin"
                        isPinned={true}
                        stockCode={"005920"}
                    />
                    <StockCardWithGraphAndInput
                        slot="graph"
                        isRise={true}
                        stockCode={"005930"}/>
                    <StockCardAlarmInput slot="input"/>
                </StockCardDefault>

                <!-- <StockCardDefault>
                    <StockCardInfoDefault 
                        slot="header"
                        stockName={"삼성전자"}
                        stockCurrentPrice={5000}
                        isRise={false}
                        stockPrice={120}
                        volatility={1.2}
                    />
                    <StockCardWithGraphAndInput
                        slot="graph"
                        isRise={false}
                        stockCode={"005930"}/>
                    <StockCardAlarmInput slot="input"/>
                </StockCardDefault> -->
            </div>
        </div>
        <!-- <NoInterested/> -->
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
        width: 70%;
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

    .popular-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
    }

    .popular-container {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
    }

    .popular-container p {
        font-size: small;
        color: rgba(0, 0, 0, 0.4);
        user-select: none;
        padding: 3px;
        margin: 0;
        margin-left: 2px;
    }
</style>