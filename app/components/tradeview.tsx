import { useEffect, useRef } from "react"
import { ChartManager } from "../utils/chartManager";
import { KLines } from "../utils/types";
import { getKLines } from "../utils/httpClients";
import { timeStamp } from "console";
import { ClipLoader } from "react-spinners";

export function TradeView({ market }: { market: string }) {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartManagerRef = useRef<ChartManager>(null);

    const init = async () => {

        let KlineData: KLines[] = [];
        //fetch current KLines data
        try {
            KlineData = await getKLines(market, "1h", Math.floor((new Date().getTime() - 1000 * 60 * 60 * 24 * 7) / 1000), Math.floor(new Date().getTime() / 1000));
        }
        catch(err) {
            console.log(err);
        }

        if(chartRef) {
            //if already a chart exists, remove it first
            if(chartManagerRef.current)
                chartManagerRef.current.destroy();

            const chartManager = new ChartManager(
                chartRef.current,
                [
                    ...KlineData?.map(line => ({
                        close: parseFloat(line.close),
                        high: parseFloat(line.high),
                        low: parseFloat(line.low),
                        open: parseFloat(line.open),
                        timestamp: new Date(line.end),
                    })),
                ].sort((x, y) => (x.timestamp < y.timestamp ? -1 : 1)) || [],
                {
                    background: "#000000",
                    color: "white"
                }
            );
            //@ts-ignore
            chartManagerRef.current =  chartManager;
        }
    }

    useEffect(() => {
        init();
    }, [market, chartRef]);
    

    if(!chartManagerRef) {   
        return <div className="w-full overflow-hidden scrollbar-hide flex justify-center items-center">
            <ClipLoader color="#4a4a4a" size={30} />
        </div>
    }

    return <div ref={chartRef} className="h-[625px] border-r-[1px] border-r-slate-800">
        
    </div>
}