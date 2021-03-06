import { Observable, BehaviorSubject } from 'rxjs';

export class Store<T> {
  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(intialState: T) {
    this._state$ = new BehaviorSubject(intialState);
    this.state$ = this._state$.asObservable();
  }

  public get state(): T {
    return this._state$.getValue();
  }

  public setState(nextState: T): void {
    this._state$.next(nextState);
  }
}
