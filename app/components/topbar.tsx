"use client"

import { redirect, useRouter } from "next/navigation";

export function Topbar() {
    const router = useRouter();

    return <div className="p-3 font-semibold flex justify-between border-b-[1px] border-slate-800">
        <div className="flex gap-16">
            <div onClick={() => router.push("/")} className="text-2xl hover:opacity-80 hover:cursor-pointer">
                X Change
            </div>
            <div className="flex place-items-center gap-10">
                <div onClick={() => router.push("/")} className="hover:opacity-80 hover:cursor-pointer">
                    Markets
                </div>
                <div onClick={() => router.push("/trade/SOL_USDC")} className="hover:opacity-80 hover:cursor-pointer">
                    Trade
                </div>
            </div>
        </div>
        <div className="flex gap-5 place-items-center">
            <div className="bg-accentGreenBg text-accentGreen rounded-md px-3 py-1 hover:cursor-pointer hover:opacity-80">
                Sign In
            </div>
            <div className="bg-accentBlueBg text-accentBlue rounded-md px-3 py-1 hover:cursor-pointer hover:opacity-80">
                Sign up
            </div>
        </div>
    </div>
}