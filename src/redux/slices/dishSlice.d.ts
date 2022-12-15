export interface Dish {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    vegetarian: boolean;
    rating: number;
    category: string;
}
export interface Pagination {
    size: number;
    count: number;
    current: number;
}
export type IDishDto = {
    dishes: Array<Dish>;
    pagination: Pagination;
};
type StateParams = {
    status: string;
    currentDish: Dish;
};
type State = IDishDto & StateParams;
export declare const fetchDishesWithSearchParams: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchDish: import("@reduxjs/toolkit").AsyncThunk<any, string, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const checkDishRating: import("@reduxjs/toolkit").AsyncThunk<any, {
    token: string;
    id: string;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addRating: import("@reduxjs/toolkit").AsyncThunk<any, {
    token: string;
    id: string;
    score: number;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
declare const _default: import("redux").Reducer<State, import("redux").AnyAction>;
export default _default;
