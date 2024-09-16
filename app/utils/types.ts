//constants
export const fetAllMktsURL = "https://price-indexer.workers.madlads.com/?ids=solana,bitcoin,ethereum,helium,shiba-inu";


//HTTP Clients

export interface Depth {
    asks: [string, string][],
    bids: [string, string][],
    lastUpdateId: string
}

export interface Trade {
    id: number;
    isBuyerMaker: Boolean;
    price: string;
    quantity: string;
    quoteQuantity: string;
    timestamp: number;
}

export interface KLines {
    close: string;
    end: string;
    high: string;
    low: string;
    open: string;
    quoteVolume: string;
    start: string;
    trades: string;
    volume: string;
}

export interface Ticker {
    firstPrice: string;
    high: string;
    lastPrice: string;
    low: string;
    priceChange: string;
    priceChangePercent: string;
    quoteVolume: string;
    symbol: string;
    trades: string;
    volume: string;
  }
 
  
  export interface MarketData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: any;
    last_updated: string;
    price_change_percentage_24h_in_currency: number;
    currencies: Currencies;
  }
  
  export interface MarketData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: any;
    last_updated: string;
    price_change_percentage_24h_in_currency: number;
    currencies: Currencies;
  }
   
  interface Currencies {
    cad: CurrencyData;
    cny: CurrencyData;
    eur: CurrencyData;
    gbp: CurrencyData;
    jpy: CurrencyData;
    usd: CurrencyData;
  }

  interface CurrencyData {
    price: number;
    market_cap: number;
    price_change_percentage_24hr: number;
    volume: number;
  }


  export const AAVE_USDC = {
    market: "AAVE_USDC",
    name: "Aave"
  }
  
  export const BLUR_USDC = {
    market: "BLUR_USDC",
    name: "Blur"
  }
  
  export const BOME_USDC = {
    market: "BOME_USDC",
    name: "Bome"
  }
  
  export const BONK_USDC = {
    market: "BONK_USDC",
    name: "Bonk"
  }

  export const BTC_USDC = {
    market: "BTC_USDC",
    name: "Bitcoin"
  }
  
  export const CLOUD_USDC = {
    market: "CLOUD_USDC",
    name: "Cloud"
  }
  
  export const DRIFT_USDC = {
    market: "DRIFT_USDC",
    name: "Drift"
  }
  
  export const ETH_USDC = {
    market: "ETH_USDC",
    name: "Ethereum"
  }
  
  export const HABIBI_USDC = {
    market: "HABIBI_USDC",
    name: "Habibi"
  }
  
  export const HNT_USDC = {
    market: "HNT_USDC",
    name: "Helium"
  }
  
  export const HONEY_USDC = {
    market: "HONEY_USDC",
    name: "Honey"
  }
  
  export const IO_USDC = {
    market: "IO_USDC",
    name: "Io"
  }
  
  export const JTO_USDC = {
    market: "JTO_USDC",
    name: "Jto"
  }
  
  export const JUP_USDC = {
    market: "JUP_USDC",
    name: "Jupiter"
  }
  
  export const KMNO_USDC = {
    market: "KMNO_USDC",
    name: "Kmno"
  }
  
  export const LDO_USDC = {
    market: "LDO_USDC",
    name: "Lido"
  }
  
  export const LINK_USDC = {
    market: "LINK_USDC",
    name: "Link"
  }
  
  export const MAX_USDC = {
    market: "MAX_USDC",
    name: "Max"
  }
  
  export const MEW_USDC = {
    market: "MEW_USDC",
    name: "Mew"
  }
  
  export const MOBILE_USDC = {
    market: "MOBILE_USDC",
    name: "Mobile"
  }
  
  export const MON_USDC = {
    market: "MON_USDC",
    name: "Mon"
  }
  
  export const MOTHER_USDC = {
    market: "MOTHER_USDC",
    name: "Mother"
  }
  
  export const NYAN_USDC = {
    market: "NYAN_USDC",
    name: "Nyan"
  }
  
  export const ONDO_USDC = {
    market: "ONDO_USDC",
    name: "Ondo"
  }
  
  export const PEPE_USDC = {
    market: "PEPE_USDC",
    name: "Pepe"
  }
  
  export const POL_USDC = {
    market: "POL_USDC",
    name: "Pol"
  }
  
  export const PRCL_USDC = {
    market: "PRCL_USDC",
    name: "Prcl"
  }
  
  export const PYTH_USDC = {
    market: "PYTH_USDC",
    name: "Pyth"
  }
  
  export const RAY_USDC = {
    market: "RAY_USDC",
    name: "Ray"
  }
  
  export const RENDER_USDC = {
    market: "RENDER_USDC",
    name: "Render"
  }
  
  export const SHFL_USDC = {
    market: "SHFL_USDC",
    name: "Shuffle"
  }
  
  export const SHIB_USDC = {
    market: "SHIB_USDC",
    name: "Shiba Inu"
  }

  export const SOL_USDC = {
    market: "SOL_USDC",
    name: "Solana"
  }
  
  export const STRK_USDC = {
    market: "STRK_USDC",
    name: "Strike"
  }
  
  export const TNSR_USDC = {
    market: "TNSR_USDC",
    name: "Tensor"
  }
  
  export const UNI_USDC = {
    market: "UNI_USDC",
    name: "Uniswap"
  }
  
  export const USDT_USDC = {
    market: "USDT_USDC",
    name: "Tether"
  }
  
  export const WEN_USDC = {
    market: "WEN_USDC",
    name: "Wen"
  }
  