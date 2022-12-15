export interface CartDish {
    id: string;
    name: string;
    price: number;
    totalPrice: number;
    amount: number;
    image: string;
}
type CartState = {
    dishes: Array<CartDish>;
    loading: string;
    currentRequestId: undefined | string;
    error: null | unknown;
    errorMessage: null | string;
};
export declare const getCartDishes: import("@reduxjs/toolkit").AsyncThunk<any, string, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addDish: import("@reduxjs/toolkit").AsyncThunk<any, {
    token: string;
    dishId: string;
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
export declare const deleteDish: import("@reduxjs/toolkit").AsyncThunk<any, {
    token: string;
    dishId: string;
    increase: boolean;
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
export declare const deleteCart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cart/deleteCart">;
declare const _default: import("redux").Reducer<CartState, import("redux").AnyAction>;
export default _default;
