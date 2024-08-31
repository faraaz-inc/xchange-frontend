"use client"
import { MarketBar } from "@/app/components/marketBar";
import { Depth } from "@/app/components/depth";
import { SwapUI } from "@/app/components/swapUI";
import { getTicker } from "@/app/utils/httpClients";
import { Ticker } from "@/app/utils/types";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import {  ClipLoader } from "react-spinners";
import { TradeView } from "@/app/components/tradeview";


export default function() {
    const { market } = useParams();

    const [ticker, setTicker] = useState<Ticker | null>(null);

    useEffect(() => {
        getTicker(Array.isArray(market) ? market[0] : market).then(t => setTicker(t));
    }, [ticker]);



    if(!ticker) {   
        return <div className="w-full h-[700px] overflow-hidden scrollbar-hide flex justify-center items-center">
            <ClipLoader color="#4a4a4a" size={30} />
        </div>
    }

    return <div className="grid grid-cols-5">
        <div className="col-span-4 border-r-[1px] border-slate-800">
            <MarketBar market={Array.isArray(market) ? market[0] : market} ticker={ticker} />
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <TradeView market={Array.isArray(market) ? market[0] : market} />
                </div>
                <div className="col-span-1">
                    <Depth market={Array.isArray(market) ? market[0] : market} />
                </div>
            </div>
        </div>
        <div className="col-span-1">
            <SwapUI market={Array.isArray(market) ? market[0] : market} />
        </div>
        
    </div>
}