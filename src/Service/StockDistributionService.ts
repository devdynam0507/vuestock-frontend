import { getDistributions, StockCurrentPriceResponse, StockDistributionResponse } from '../Api/Stock';
import type { ErrorResponse } from '../Api/common/CommonDtos';

export class StockDistributionUpdater {

    private lastViewTimeMills: number;

    constructor(readonly stockCode: string,
                readonly subscriber: (data: StockDistributionResponse | ErrorResponse) => void) {
        this.lastViewTimeMills = -1;
    }

    /**
     * 현 시각 기준 09시 까지의 분봉 데이터를 가져온다.
     * 주말 일 경우 금요일의 모든 분봉 데이터를 가져옴
     */
    async update() {
        let distributionsPast30MinsOrError: StockDistributionResponse | ErrorResponse = null;
        const now: Date = new Date();
        distributionsPast30MinsOrError = await getDistributions(this.stockCode, now.getTime());
        if (distributionsPast30MinsOrError instanceof StockDistributionResponse) {
            this.lastViewTimeMills = distributionsPast30MinsOrError.lastViewTimeMills;
        }
        this.subscriber(distributionsPast30MinsOrError);
    }
}