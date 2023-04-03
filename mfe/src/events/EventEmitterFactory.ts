import { EventEmitterInterface } from "./EventEmitterInterface";
import { EventEmitter } from "./eventEmitter";

class EventEmitterSingletonFactory {
    private static instance: EventEmitterInterface | null = null;

    static getInstance(): EventEmitterInterface {
        if (!EventEmitterSingletonFactory.instance) {
            EventEmitterSingletonFactory.instance = new EventEmitter();
        }

        return EventEmitterSingletonFactory.instance;
    }
}

export { EventEmitterSingletonFactory as EventEmitterFactory}