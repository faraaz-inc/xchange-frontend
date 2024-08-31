import { ColorType, createChart, CrosshairMode, ISeriesApi, UTCTimestamp } from "lightweight-charts";
import { KLines } from "./types";


export class ChartManager {

    private candleSeries: ISeriesApi<"Candlestick">;
    private lastUpdatedTime: number = 0;
    private chart: any;

    private currentBar: {
        open: number | null;
        high: number | null;
        low: number | null;
        close: number | null;
    } = {
        open: null,
        high: null,
        low: null,
        close: null
    };

    constructor(ref: any, initialData: any[], layout: { background: string; color: string }) {

        const chart = createChart(ref, {
            autoSize: true,
            overlayPriceScales: {
                ticksVisible: true,
                borderVisible: true
            },
            crosshair: {
                mode: CrosshairMode.Normal
            },
            rightPriceScale: {
                visible: true,
                ticksVisible: true,
                entireTextOnly: true
            },
            grid: {
                horzLines: {
                    visible: false
                },
                vertLines: {
                    visible: false
                },
            },
            layout: {
                background: {
                    type: ColorType.Solid,
                    color: layout.background
                },
                textColor: "white"
            }
        });

        this.chart = chart;
        this.candleSeries = chart.addCandlestickSeries();

        this.candleSeries.setData(
            initialData.map((data) => (
                {...data, time: (data.timestamp / 1000) as UTCTimestamp}
            ))
        )
    }

    public update(updatedPrice: any) {
        if (!this.lastUpdatedTime) {
            this.lastUpdatedTime = new Date().getTime();
        }

        this.candleSeries.update({
            time: (this.lastUpdatedTime / 1000) as UTCTimestamp,
            close: updatedPrice.close,
            low: updatedPrice.low,
            high: updatedPrice.high,
            open: updatedPrice.open
        });

        if(updatedPrice.newCandleInitiated) {
            this.lastUpdatedTime = updatedPrice.time;
        }
    }

    public destroy() {
        this.chart.remove();
    }
}