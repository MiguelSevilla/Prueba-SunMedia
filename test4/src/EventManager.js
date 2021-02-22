import Event from './Event';

export default class EventManager{
    constructor (events) {
        this.events = events;
    }

    run() {
        const oneSecond = 1000;

        console.log("RUNNING");
        
        for(let i=0;i<this.events.length;i++){
            let event = new Event(this.events[i].second,this.events[i].type,this.events[i].message);
            setTimeout(function () {
                event.run();
            }, event.second * oneSecond);
        }
    }
};