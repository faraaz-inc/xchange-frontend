import axios from "axios";
import { Depth, KLines, MarketData, Ticker, Trade } from "./types";

const BASE_URL = "https://exchange-proxy.100xdevs.com/api/v1";


//Get Depth
export async function getDepth(market: string): Promise<Depth> {
    const response = await axios.get(`${BASE_URL}/depth?symbol=${market}`);
    if(!response)
        throw new Error("Error while fetching Depth");

    return response.data as Promise<Depth>;
}

//Get Trades
export async function getTrades(market: string): Promise<Trade[]> {
    const response = await axios.get(`${BASE_URL}/trades?symbol=${market}`);
    if(!response)
        throw new Error("Error while fetching Trades");
    return response.data as Promise<Trade[]>;
}

//Get K Lines
export async function getKLines(symbol: string, interval: string, startTime: number, endTime: number) {
    const response = await axios.get(`${BASE_URL}/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`);
    if(!response)
            throw new Error("Error while fetching K Lines");

    const kLines: KLines[] = response.data as KLines[];

    //sort the KLines data in ascending order of time
    return kLines.sort((x, y) => Number(x.end) < Number(y.end) ? -1 : 1)
}

//Get single ticker from the list of tickers
export async function getTicker(market: string): Promise<Ticker>{
    const tickers = await getTickers();
    if(!tickers)
        throw new Error("No Ticker found for the specified market");
    
    return tickers.find(ticker => ticker.symbol === market) as Ticker;
}

export async function getTickers(): Promise<Ticker[]> {
    const response = await axios.get(`${BASE_URL}/tickers`);
    if(!response)
        throw new Error("Error while fetching tickers");

    return response.data as Promise<Ticker[]>;
}

//Get Markets
export async function getMarkets(): Promise<MarketData[]> {
    const response = await axios.get("https://price-indexer.workers.madlads.com/?ids=solana,bitcoin,ethereum,aave,chainlink,uniswap,helium,shiba-inu");
    if(!response)
        throw new Error("Error while fetching market data");

    return response.data as Promise<MarketData[]>;

}

