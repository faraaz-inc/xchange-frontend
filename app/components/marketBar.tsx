"use client"
import { useEffect, useState } from "react";
import { getTicker } from "../utils/httpClients";
import { Ticker } from "../utils/types";


export function MarketBar({ market, ticker }: { market: string, ticker: Ticker}) {
    const mkt = market.split("_")[0];


    return <div className="flex gap-14 w-full h-16 border-b-[1px] border-slate-800">
        <div className="flex gap-2 ml-5 justify-center items-center">
            <img src={`/coins/${mkt}.webp`} alt="Market" className="h-8 w-8" />
            <div>
                {market.replace("_", "/")}
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-[18px] text-accentGreen">
                {ticker?.lastPrice}
            </div>
            <div>
                ${ticker?.lastPrice}
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