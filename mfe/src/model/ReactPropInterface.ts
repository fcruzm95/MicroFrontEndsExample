import { BehaviorSubject, Observable } from 'rxjs';

export interface ReactPropInterface {
    message: string,
    className: string,
    onClickEvent: () => void,
    onChildEvent: BehaviorSubject<string>
}