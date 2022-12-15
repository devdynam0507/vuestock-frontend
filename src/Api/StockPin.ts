import axios from "axios";
import { StockCurrentPriceResponse } from "./Stock";

export class StockPinResponse {

    constructor(readonly stockCode: string,
                readonly stockName: string,
                readonly stockPrice: StockCurrentPriceResponse) {}

    static ofAxios(axiosResponseData: any): StockPinResponse[] {
        return axiosResponseData.data.map((v: any) => {
            return new StockPinResponse(v.stockCode, 
                                        v.stockName,
                                        StockCurrentPriceResponse.fromDistribution(v.stockPrice)
            );
        })
    }
}

export async function getUserInterestedStocks(): Promise<StockPinResponse[]> {
    const responses = await axios.get('http://52.78.5.54:8080/api/v1/member/pin', {
        withCredentials: true
    });
    return StockPinResponse.ofAxios(responses.data);
}

export async function registerPin(stockCode: string): Promise<boolean> {
    const response = await axios.post('http://api.stockvue.kr:8080/api/v1/member/pin', { stockCode }, {
        withCredentials: true
    });
    return response.status === 201;
}

export async function deletePin(stockCode: string): Promise<boolean> {
    try {
        await axios.delete('http://api.stockvue.kr:8080/api/v1/member/pin', {
            withCredentials: true,
            data: { stockCode }
        })
        return true;
    }
    catch(e) {
        return false;
    }
}