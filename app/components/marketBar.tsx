"use client"
import { useEffect, useState } from "react";
import { getTicker } from "../utils/httpClients";
import { Ticker } from "../utils/types";
import { SignalingManager } from "../utils/signalingManager";


export function MarketBar({ market }: { market: string }) {
    const [ticker, setTicker] = useState<Ticker | null>(null);

    const mkt = market.split("_")[0];

    useEffect(() => {
        //set the ticker initially
        getTicker(market).then(t => setTicker(t));

        //register the callback for the signalling manager
        //pass a callback function to set the ticker data in above state variable
        SignalingManager.getInstance().registerCallback("ticker", (data: Partial<Ticker>) => setTicker(prevTicker => ({
            firstPrice: data?.firstPrice ?? prevTicker?.firstPrice ?? "",
            high: data.high ?? prevTicker?.high ?? "",
            lastPrice: data?.lastPrice ?? prevTicker?.lastPrice ?? "",
            low: data?.low ?? prevTicker?.low ?? "",
            priceChange: data?.priceChange ?? prevTicker?.priceChange ?? "",
            priceChangePercent: data?.priceChangePercent ?? prevTicker?.priceChangePercent ?? "",
            quoteVolume: data?.quoteVolume ?? prevTicker?.quoteVolume ?? "",
            symbol: data?.symbol ?? prevTicker?.symbol ?? "",
            trades: data?.trades ?? prevTicker?.trades ?? "",
            volume: data?.volume ?? prevTicker?.volume ?? ""

        })), `TICKER-${market}`);

        //subscribe to the ticker
        SignalingManager.getInstance().sendMessage({"method": "SUBSCRIBE", "params":[`ticker.${market}`]});

        return () => {
            //de register the callback
            SignalingManager.getInstance().deRegisterCallback("ticker", `TICKER-${market}`);
            //unsubscribe
            SignalingManager.getInstance().sendMessage({"method": "UNSUBSCRIBE", "params":[`ticker.${market}`]});
        }

    }, [market]);


    return <div className="flex gap-14 w-full h-16 border-b-[1px] border-slate-800">
        <div className="flex gap-2 ml-5 justify-center items-center">
            <img src={`/coins/${mkt}.png`} alt="Market" className="h-8 w-8" />
            <div>
                {market.replace("_", "/")}
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
            <div className={`text-[18px] ${Number(ticker?.priceChange) >= 0 ? "text-accentGreen" : "text-accentRed"}`}>
                {Number(ticker?.lastPrice).toFixed(2)}
            </div>
            <div>
                ${Number(ticker?.lastPrice).toFixed(2)}
            </div>
        </div>
        <div className="flex flex-col font-normal items-center justify-center gap-1">
            <div className="text-gray-400">
                24H Change
            </div>
            <div className={`flex gap-2`}>
                <div className={`${Number(ticker?.priceChange) >= 0 ? "text-accentGreen" : "text-accentRed"}`}>
                    {Number(ticker?.priceChange) > 0 ? "+" : ""}{ticker?.priceChange}
                </div >
                <div className={`${Number(ticker?.priceChange) >= 0 ? "text-accentGreen" : "text-accentRed"}`}>
                    {(Number(ticker?.priceChangePercent) * 100).toFixed(2)}%
                </div>
                
            </div>
        </div>
        <div className="flex flex-col font-normal items-center justify-center gap-1">
            <div className="text-gray-400">
                24H High
            </div>
            <div>
                {ticker?.high}
            </div>
        </div>
        <div className="flex flex-col font-normal items-center justify-center gap-1">
            <div className="text-gray-400">
                24H Low
            </div>
            <div>
                {ticker?.low}
            </div>
        </div>
        <div className="flex flex-col font-normal items-center justify-center gap-1">
            <div className="text-gray-400">
                24H Volume ({market.split("_")[1]})
            </div>
            <div>
                {Number(ticker?.quoteVolume).toLocaleString()}
            </div>
        </div>
        
    </div>
}