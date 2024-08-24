import { useState } from "react";

export function SwapUI() {
    const [mode, setMode] = useState<Mode>(Mode.Buy);

    return <div className="grid grid-cols-2 place-items-center">
        <div onClick={() => setMode(Mode.Buy)} className={`text-accentGreen h-16 flex items-center justify-center font-semibold ${mode === Mode.Buy ? "bg-accentGreenBg" : ""} w-full hover:cursor-pointer`}>
            Buy
        </div>
        <div onClick={() => setMode(Mode.Sell)} className={`text-accentRed h-16 flex items-center justify-center font-semibold ${mode === Mode.Sell ? "bg-accentRedBg" : ""} w-full hover:cursor-pointer`}>
            <div>
                Sell
            </div>
        </div>
    </div>
}

enum Mode {
    Buy,
    Sell
}