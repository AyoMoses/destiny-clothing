import { AnyAction } from 'redux-saga';

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// if createaction is called with a type and payload then we return actionWithPayload
// create a function overload by creating when createAction has a type and payload and has a type alone then what action to return and when it does not have we return payload as void
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
