import axios, { AxiosError, AxiosResponse } from "axios";
import { ErrorResponse } from "./common/CommonDtos";
import { StockCurrentPriceResponse } from "./Stock";

export class StockSearchResultWithPrices {

    constructor(readonly stockName: string,
                readonly stockCode: string,
                readonly stockPrice: StockCurrentPriceResponse) {}

    static ofAxiosArrayResponse(axiosResponseData: any): StockSearchResultWithPrices[] {
        const results: StockSearchResultWithPrices[] = [];
        for (const data of axiosResponseData) {
            results.push(this.ofAxiosSingle(data));
        }
        return results;
    }

    static ofAxiosSingle(data: any): StockSearchResultWithPrices {
        return new StockSearchResultWithPrices(
            data.stockName,
            data.stockCode,
            StockCurrentPriceResponse.fromDistribution(data.stockPrice)
        );
    }
}

export async function searchByStockName(stockName: string): Promise<StockSearchResultWithPrices[] | ErrorResponse> {
    try {
        const response: AxiosResponse =
            await axios.get(`http://api.stockvue.kr:8080/api/v1/stock/search/multiple?stockName=${stockName}`);
        return StockSearchResultWithPrices.ofAxiosArrayResponse(response.data);
    }
    catch(e) {
        const err = e as AxiosError;
        return new ErrorResponse(err.response.status);
    }
}