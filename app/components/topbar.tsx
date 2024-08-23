"use client"
import { redirect } from "next/navigation";

export function Topbar() {
    

    return <div className="p-5 font-semibold flex justify-between">
        <div className="flex gap-16">
            <div onClick={() => redirect("/")} className="text-2xl hover:opacity-80 hover:cursor-pointer">
                XChange
            </div>
            <div className="flex place-items-center gap-10">
                <div className="hover:opacity-80 hover:cursor-pointer">
                    Markets
                </div>
                <div className="hover:opacity-80 hover:cursor-pointer">
                    Trade
                </div>
            </div>
        </div>
        <div className="flex gap-5 place-items-center">
            <div className="bg-accentGreenBg text-accentGreen rounded-md px-3 py-1 hover:cursor-pointer hover:opacity-80">
                Login
            </div>
            <div className="bg-accentBlueBg text-accentBlue rounded-md px-3 py-1 hover:cursor-pointer hover:opacity-80">
                Signup
            </div>
        </div>
    </div>
}