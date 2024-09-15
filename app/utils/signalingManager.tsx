import { Ticker } from "./types";

const BASE_URL = "wss://ws.backpack.exchange/";

export class SignalingManager {
    private static instance: SignalingManager;
    private ws: WebSocket;
    private bufferedMessages: any[] = [];
    private callbacks: { [type: string]: any[] } = {};
    private id: number;
    private initialised: boolean = false;

    private constructor() {
        this.ws = new WebSocket(BASE_URL);
        this.bufferedMessages = [];
        this.callbacks = {};
        this.id = 1;
        this.init();
    }

    public static getInstance() {
        if(!SignalingManager.instance)
            SignalingManager.instance = new SignalingManager();
        return SignalingManager.instance;
    }

    init() {
        //when the connection opens, go thru buffered messages first and send them
        this.ws.onopen = () => {
            this.initialised = true;
            this.bufferedMessages.forEach(message => {
                this.ws.send(JSON.stringify(message));  
            });
            this.bufferedMessages = [];
        }
        
        //whenever a message arrives from the ws backend
        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);     //extract the body
            const type = message.data.e;                //check for the type

            //if callbacks are registered for that type of message
            if(this.callbacks[type]) {

                //iterate through all the callbacks and call them accordingly
                this.callbacks[type].forEach(({ callback }) => {

                    //for ticker callbacks, create new ticker and use setTicker() callback
                    if(type === "ticker") {
                        const newTicker: Partial<Ticker> = {
                            lastPrice: message.data.c,
                            high: message.data.h,
                            low: message.data.l,
                            volume: message.data.v,
                            quoteVolume: message.data.V,
                            symbol: message.data.s
                        }
                        callback(newTicker);
                    }
                    //for depth callbacks, update depth and call the callback
                    if(type === "depth") {
                        //get the updated asks and bids
                        const updatedAsk = message.data.a;
                        const updatedBid = message.data.b;
                        //call the callback
                        callback({updatedAsk, updatedBid});
                    }
                })
            }
        }
    }

    //send a message on websocket
    sendMessage(message: any) {
        const messageToSend = {
            ...message,
            id: this.id++
        }
        if(!this.initialised) {
            this.bufferedMessages.push(messageToSend);
        }
        else
            this.ws.send(JSON.stringify(messageToSend));
    }

    registerCallback(type: string, callback: any, id: string) {
        //initialise the type array inside callback for that type if need be
        this.callbacks[type] = this.callbacks[type] || [];
        //push the callback
        this.callbacks[type].push({ callback, id });
    }

    deRegisterCallback(type: string, id: string) {
        //find the callback inside its type array
        if(this.callbacks[type]) {
            //get its index
            const index = this.callbacks[type].findIndex(callback => callback.id === id);
            //remove it from the array by splicing 1 element from its index
            if(index !== -1) {
                this.callbacks[type].splice(index, 1);
            }
        }
    }

}