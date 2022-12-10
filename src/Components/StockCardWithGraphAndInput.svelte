<script lang="ts">
    import ApexCharts from 'apexcharts'
    import { onMount } from 'svelte';
    import { generateUUID4 } from '../Service/UUIDGeneratorService';
    import { Scheduler } from '../Service/Scheduler';
    import { StockDistributionUpdater } from '../Service/StockDistributionService';
    import { StockCurrentPriceResponse, StockDistributionResponse, getCurrentStock } from '../Api/Stock';
    import type { ErrorResponse } from '../Api/common/CommonDtos';

    export let isRise: boolean;
    export let stockCode: string;

    let data = [];
    const color: string = isRise ? '#F23343' : '#2175EB';
    const uuid: string = 'chart-' + generateUUID4().replaceAll('-', '')
    let min: number = 0;
    let max: number = 30;
    let chart = null;

    const cron: Scheduler = new Scheduler({
        intervalSeconds: 60,
        jobFunction: async () => {
            if (chart === null) {
                return;
            }
            const currentStock = await getCurrentStock(stockCode);
            if (!(currentStock instanceof StockCurrentPriceResponse)) {
                return;
            }
            if (currentStock.currentPrice === -1) {
                return;
            }
            data.push([new Date().getTime(), currentStock.currentPrice]);
            chart.updateSeries([{
                name: "stocks",
                data: data
            }])
        }
    });
    const distributionSubscriber = async (distribution: StockDistributionResponse | ErrorResponse) => {
        if (!(distribution instanceof StockDistributionResponse)) {
            return;
        }
        if (chart === null) {
            return;
        }
        distribution.distributions.sort((a, b) => {
            return a.timeMills - b.timeMills;
        }).forEach((v: StockCurrentPriceResponse) => {
            data.push([v.timeMills, v.currentPrice]);
        })
        chart.updateSeries([{
            name: "stocks",
            data: data
        }]);        
    }
    const stockDistributionUpdater: StockDistributionUpdater = 
        new StockDistributionUpdater(stockCode, distributionSubscriber);

    onMount(async () => {
        const options = {
            colors: [color],
            chart: {
                events: {
                    beforeZoom: function(ctx) {
                        // we need to clear the range as we only need it on the iniital load.
                        ctx.w.config.xaxis.range = undefined
                    },
                },
                toolbar: {
                    show: true,
                        tools: {
                        zoom: false,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
                        reset: false,
                        download: false
                    },
                },
                height: 100,
                type: "area",
                sparkline: {
                    enabled: false,
                },
                parentHeightOffset: 0,
                parentWeightOffset: 0,
                autoSelected: 'pan' 
            },
            dataLabels: {
                enabled: false
            },
            series: [
                {
                    name: "stocks",
                    data
                }
            ],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: color,
                    type: "vertical",
                    shadeIntensity: 0.5,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: 0.9,
                    opacityTo: 0.0,
                    colorStops: []
                }
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            },
            xaxis: {
                type: 'datetime',
                tickAmount: 6,
                labels: {
                    datetimeUTC: false,
                    show: true
                },
            },
            yaxis: {
                type: 'numeric',
                labels: {
                    show: false
                }
            },
            tooltip: {
                enabled: false,
                x: {
                    format: 'dd MMM',
                    formatter: undefined,
                },
                y: {
                    // formatter: (value) => { return value + "%" },
                },        
            }
        };
        chart = new ApexCharts(document.querySelector(`#${uuid}`), options);
        chart.render();
        await stockDistributionUpdater.update();
        await cron.startSchedule();
    })
</script>
<div id="{uuid}">
</div>