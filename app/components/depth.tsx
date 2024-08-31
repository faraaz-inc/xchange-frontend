import { useEffect, useState } from "react"
import { getDepth, getTicker } from "../utils/httpClients";
import { AskTable } from "./asksTable";
import { BidsTable } from "./bidsTable";


export function Depth({ market }: { market: string } ) {
    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();

    useEffect(() => {
        getDepth(market).then(d => {
            setBids(d.bids.reverse());
            setAsks(d.asks);
        });

        getTicker(market).then(t => {
            setPrice(t.lastPrice);
        })

    }, []);



    return <div>
        <TableHeader />
        {asks && <AskTable asks={asks} />}
        {price && <div>{price}</div>}
        {bids && <BidsTable bids={bids} />}

    </div>
}


function TableHeader() {

    return <div className="flex justify-between text-sm text-gray-400 mx-1">
        <div>Price</div>
        <div>Size</div>
        <div>Total</div>
    </div>
}