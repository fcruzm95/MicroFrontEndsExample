import { Observable } from 'rxjs';
import { Event } from './EventModel';


export interface EventEmitterInterface {
    eventEmitter$: Observable<Event>;

    sendEvent(name: string, payload: any): void;
}
