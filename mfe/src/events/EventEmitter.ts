import { BehaviorSubject, Observable } from "rxjs";
import { EventEmitterInterface } from "./EventEmitterInterface";
import { Event } from "./eventModel";

export class EventEmitter implements EventEmitterInterface {

    private eventEmitter: BehaviorSubject<Event> = new BehaviorSubject<Event>(null);
    public eventEmitter$: Observable<Event> = this.eventEmitter.asObservable();

    sendEvent(name: string, payload: any): void {
        this.eventEmitter.next({
            name,
            payload
        });
    }

}