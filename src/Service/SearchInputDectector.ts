
export interface SearchInputCompleteDetectConfig {
    // 몇초 뒤 감지할것인지 
    delaySecs: number;
    // 감지할 input element
    input: HTMLInputElement;
    // 탐지할 subscribe 함수
    subscriber: (value: string) => void;
}

export class SearchInputCompleteDetector {

    private readonly onInputObserver: () => void;
    private scheduler: NodeJS.Timeout = null;

    constructor(private readonly config: SearchInputCompleteDetectConfig) {
        this.config.input.addEventListener('input', (ev: Event) => {
            if (this.scheduler !== null) {
                clearTimeout(this.scheduler);
            }
            this.scheduler = setTimeout(() => {
                this.config.subscriber(this.config.input.value);
            }, this.config.delaySecs * 1000);
        });
    }
}