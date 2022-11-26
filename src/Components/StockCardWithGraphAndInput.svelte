<script lang="ts">
    import ApexCharts from 'apexcharts'
    import { onMount } from 'svelte';
    import StockCardInfoDefault from './StockCardInfoDefault.svelte';
    export let stockName: string;
    export let stockCurrentPrice: number;
    export let isRise: boolean;
    export let stockPrice: number;
    export let volatility: number;

    const color = isRise ? '#F23343' : 'blue';

    onMount(() => {
        const options = {
            colors: [color],
            chart: {
                toolbar: {
                    show: false,
                },
                height: 100,
                type: "area",
                sparkline: {
                    enabled: false,
                },
                parentHeightOffset: 0,
                parentWeightOffset: 0,
            },
            dataLabels: {
                enabled: false
            },
            series: [
                {
                    name: "Timeline",
                    data: [45, 52, 38, 45, 19, 23, 2] // TODO: 시계열 데이터
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
                    // stops: [0, 50, 100],
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
                labels: {
                    show: false
                },
            },
            yaxis: {
                show: false,
                labels: {
                    show: false
                }
            },
            tooltip: {
                x: {
                    format: 'dd MMM',
                    formatter: undefined,
                },
                y: {
                    formatter: (value) => { return value + "%" },
                },        
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    })
</script>

<StockCardInfoDefault 
    stockName={stockName}
    stockCurrentPrice={stockCurrentPrice}
    isRise={isRise}
    stockPrice={stockPrice}
    volatility={volatility}
/>
<div id="chart">
</div>