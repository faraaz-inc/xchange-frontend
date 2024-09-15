import { useEffect, useState } from "react"
import { getDepth, getTicker } from "../utils/httpClients";
import { AskTable } from "./asksTable";
import { BidsTable } from "./bidsTable";
import { SignalingManager } from "../utils/signalingManager";


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
        });

        //add realtime callback and subscribe
        SignalingManager.getInstance().registerCallback("depth", ({updatedAsk, updatedBid}: {updatedAsk: [string, string], updatedBid: [string, string]}) => {
            setAsks((prevAsks = []) => {
                    const newAsks = [...prevAsks];

                    //go over the prev asks and update the depth of existing prices

                    for(let i = 0; i < newAsks.length; i++) {

                        const currentAsk = newAsks[i];

                        for(let j = 0; j < updatedAsk.length; j++) {
                            if(currentAsk[0] === updatedAsk[j][0]) {
                                if(updatedAsk[j][1] === "0.00") {
                                    newAsks.splice(i, 1);
                                    break;
                                }
                                newAsks[i][1] = updatedAsk[j][1];
                                break;
                            }
                        }

                    }
                    return newAsks;
            });

            setBids((prevBids = []) => {
                const newBids = [...prevBids];

                for(let i = 0; i < newBids.length; i++) {

                    for(let j = 0; j < updatedBid.length; j++) {
                        if(newBids[i][0] === updatedBid[j][0]) {
                            newBids[i][1] === updatedBid[j][1];
                            break;
                        }
                    }
                }
                return newBids;
            })

        }, `DEPTH-${market}`);
        SignalingManager.getInstance().sendMessage({"method":"SUBSCRIBE","params":["depth.200ms.SOL_USDC"],"id":2});

        return () => {
            SignalingManager.getInstance().deRegisterCallback("depth", `DEPTH-${market}`);
            SignalingManager.getInstance().sendMessage({"method":"UNSUBSCRIBE","params":["depth.200ms.SOL_USDC"],"id":3})
        }

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