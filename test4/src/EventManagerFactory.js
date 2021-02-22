import EventManager from './EventManager';

export default class EventManagerFactory{
    static create(events, types) {
        events.forEach(function(element,index){
            if(!types.includes(element.type)){
                events.splice(index, 1)
            }
        })

        return new EventManager(events);
    }
};