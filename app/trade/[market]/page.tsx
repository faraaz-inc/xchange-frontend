"use client"
import { MarketBar } from "@/app/components/marketBar";
import { SwapUI } from "@/app/components/swapUI";
import { useParams } from "next/navigation"
import { useState } from "react";


export default function() {
    const { market } = useParams();


    return <div className="grid grid-cols-5">
        <div className="col-span-4 border-r-[1px] border-slate-800">
            <MarketBar market={Array.isArray(market) ? market[0] : market} />
            <div>
                
            </div>
        </div>
        <div className="col-span-1">
            <SwapUI />
        </div>
        
    </div>
}