import { useEffect, useState } from "react";

export function SwapUI({ market }: { market: string }) {
    const [mode, setMode] = useState<Mode>(Mode.Buy);
    const [buyMode, setBuyMode] = useState<BuyMode>(BuyMode.Limit);

    useEffect(() => {
        console.log(buyMode);
    }, [buyMode]);

    return <div className="">
        <div className="grid grid-cols-2">
            <div onClick={() => setMode(Mode.Buy)} className={`text-accentGreen h-16 flex items-center justify-center font-semibold ${mode === Mode.Buy ? "bg-accentGreenBg border-b-accentGreen border-b-[1px]" : ""} w-full hover:cursor-pointer`}>
                Buy
            </div>
            <div onClick={() => setMode(Mode.Sell)} className={`text-accentRed h-16 flex items-center justify-center font-semibold ${mode === Mode.Sell ? "bg-accentRedBg border-b-accentRed border-b-[1px]" : ""} w-full hover:cursor-pointer`}>
                <div>
                    Sell
                </div>
            </div>
        </div>
        <div className="flex gap-3 p-2">
            <div onClick={() => setBuyMode(BuyMode.Limit)} className={`border-accentBlue p-1 ${buyMode === BuyMode.Limit ? "border-b-[2px]" : ""} hover:cursor-pointer`}>
                Limit
            </div>
            <div onClick={() => setBuyMode(BuyMode.Market)} className={`border-accentBlue p-1 ${buyMode === BuyMode.Market ? "border-b-[2px]" : ""} hover:cursor-pointer`}>
                Market
            </div>
        </div>
        <div className="flex justify-between text-sm px-2 text-slate-400">
            <div>
                Available Balance
            </div>
            <div>
                0.00 USDC
            </div>
        </div>
        {buyMode === BuyMode.Limit && (
            <div className="px-2">
                <p className="text-sm text-slate-400 mt-5 mb-1">
                    Price
                </p>
                <input type="text" placeholder="0" className="w-full py-1 h-10 px-2 border-2 border-slate-800 bg-black rounded-md mb-5" />
                <p className="text-sm text-slate-400 mb-1">
                    Quantity
                </p>
                <input type="text" placeholder="0" className="w-full py-1 h-10 px-2 border-2 border-slate-800 bg-black rounded-md mb-5" />
                <div className="w-full text-center mt-10 rounded-2xl bg-white text-black py-3 font-semibold">
                    Sign Up to Trade
                </div>
            </div>
        )}
        {buyMode === BuyMode.Market && (
            <div className="px-2">
                <p className="text-sm text-slate-400 mt-5 mb-1">
                    {mode === Mode.Buy ? "Order Value" : "Quantity"} &#x21c4;
                </p>
                <input type="text" placeholder="0" className="w-full py-1 h-10 px-2 border-2 border-slate-800 bg-black rounded-md mb-5" />
                <div className="w-full text-center mt-10 rounded-2xl bg-white text-black py-3 font-semibold">
                    Sign Up to Trade
                </div>
            </div>
        )}
    </div>
}

enum Mode {
    Buy,
    Sell
}

enum BuyMode {
    Limit,
    Market
}