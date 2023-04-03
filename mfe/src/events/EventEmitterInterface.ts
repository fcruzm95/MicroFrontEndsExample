import { Observable } from 'rxjs';
import { Event } from "./eventModel";

export interface EventEmitterInterface {
    eventEmitter$: Observable<Event>;

    sendEvent(name: string, payload: any): void;
}