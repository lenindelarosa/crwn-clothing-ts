import { AnyAction } from "redux";

export type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & {type: string}>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string}>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function){
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction){
            return action.type !== type;
        }
    })
};

// Creating an overloaded function that receives any action creator and check the type against it. 
// This is needed in order to dismiss any action that its not related to a particular reducer, as you know
// in redux all actions are ditpached to every reducer!

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
};

export type Action<T> = {
    type: T;
};

export function createAction<T extends string,P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string,P>(type: T, payload: P) {
    return { type, payload };
};

//export const createAction = (type, payload) => ({type, payload});