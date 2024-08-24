import axios from "axios"


export default async function Home() {

  //fetch all markets
  const allMarkets = await axios.get("https://api.backpack.exchange/api/v1/markets");
  const markets = allMarkets.data as Market[];
  
  //filter the array to only include BTC, ETH and SOL
  const finalMarkets = markets.filter(market => market.baseSymbol === "BTC" || market.baseSymbol === "ETH" || market.baseSymbol === "SOL");

  return <div>
    <div className="flex items-center flex-col">
      <img src="/homeImage.jpg" alt="Home" className="h-[500px] w-9/12 opacity-50" />

      <div className="w-9/12 mt-10">
          <div className="text-3xl">
            Markets
          </div>
          <div>

          </div>
      </div>
    </div>
  </div>
}

