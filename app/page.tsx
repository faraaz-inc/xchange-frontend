import axios from "axios"
import { Markets } from "./components/markets"
import { fetAllMktsURL, MarketData } from "./utils/types"


export default async function Home() {

  //fetch all markets
  const response = await axios.get(fetAllMktsURL);
  const markets: MarketData[] | unknown = response.data;


  return <div>
    <div className="flex items-center flex-col">
      <img src="/homeImage.jpg" alt="Home" className="h-[500px] w-9/12 opacity-50" />

      <div className="w-9/12 mt-10">
          <div className="text-3xl mb-5">
            Markets
          </div>
          <div className="bg-accentGrayBg rounded-md mb-10">
            <div className="flex justify-between px-5 py-5 text-slate-400 w-full">
              <div className="w-1/6">
                Name
              </div>
              <div className="flex justify-end w-4/6">
                <div className="w-48 text-center">
                  Price
                </div>
                <div className="w-48 text-center">
                  Market Cap
                </div>
                <div className="w-48 text-center">
                  24H Change
                </div>
                <div className="w-48 text-center">
                  Last 7 days
                </div>
              </div>
            </div>

            <div>
              {/* @ts-ignore */}
              {markets.map((market: MarketData) => <Markets key={market.symbol} id={market.symbol} symbol={market.symbol} name={market.name} currentPrice={market.current_price} marketCap={market.market_cap} priceChangePercent={market.price_change_percentage_24h} img={market.image} />)}
            </div>
          </div>
      </div>
    </div>
  </div>
}

