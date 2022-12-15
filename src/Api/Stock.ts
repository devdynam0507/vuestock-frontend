import axios, { AxiosError, AxiosResponse } from 'axios';
import { ErrorResponse } from './common/CommonDtos';

export class StockCurrentPriceResponse {
    constructor(readonly previousDayPriceDiff: number,
                readonly previousDaySign: string,
                readonly priviousDayPriceDiffPercent: number,
                readonly currentPrice: number,
                readonly time: string,
                readonly date: string,
                readonly timeMills: number) { }

    static ofAxios(axiosResponseData: any): StockCurrentPriceResponse {
        return new StockCurrentPriceResponse(
            axiosResponseData.data.previousDayPriceDiff,
            axiosResponseData.data.previousDaySign,
            axiosResponseData.data.priviousDayPriceDiffPercent,
            axiosResponseData.data.currentPrice,
            axiosResponseData.data.time,
            axiosResponseData.data.date,
            axiosResponseData.data.timeMills
        );
    }

    static fromDistribution(data: any) {
        return new StockCurrentPriceResponse(
            data.previousDayPriceDiff,
            data.previousDaySign,
            data.previousDayPriceDiffPercent,
            data.currentPrice,
            data.time,
            data.date,
            data.timeMills
        );
    }
}

export class StockDistributionResponse {
    constructor(readonly currentStock: StockCurrentPriceResponse,
                readonly distributions: StockCurrentPriceResponse[],
                readonly lastViewTimeMills: number) {}

    static ofAxios(axiosResponseData: any): StockDistributionResponse {
        const stockDistributionObj: any = axiosResponseData.data.stockDistribution;
        const currentStock: StockCurrentPriceResponse = StockCurrentPriceResponse.fromDistribution(stockDistributionObj.currentPrice);
        const distributions: StockCurrentPriceResponse[] = stockDistributionObj.distributions.map((v: any) => {
            return StockCurrentPriceResponse.fromDistribution(v);
        });
        return new StockDistributionResponse(currentStock, distributions, axiosResponseData.data.lastViewTimeMills);
    }
}

export async function getCurrentStock(stockCode: string): Promise<StockCurrentPriceResponse | ErrorResponse> {
    try {
        const response: AxiosResponse = 
            await axios.get(`http://api.stockvue.kr:8080/api/v1/stock?stockCode=${stockCode}`);
        return StockCurrentPriceResponse.ofAxios(response.data);
    }
    catch(error) {
        const err = error as AxiosError
        return new ErrorResponse(err.response.status);
    }
}

export async function getDistributions(stockCode: string, lastViewTimeMills: number): Promise<StockDistributionResponse | ErrorResponse> {
    try {
        const response: AxiosResponse =
            await axios.get(`http://api.stockvue.kr:8080/api/v1/stock/distributions?stockCode=${stockCode}&dateMills=${lastViewTimeMills}`);
        return StockDistributionResponse.ofAxios(response.data);
    }
    catch(error) {
        console.error(error);
        const err = error as AxiosError;
        return new ErrorResponse(err.response.status);
    }
}