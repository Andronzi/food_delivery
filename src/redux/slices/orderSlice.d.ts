import { CartDish } from "./cartSlice";
interface IOrder {
    id: string;
    deliveryTime: Date;
    orderTime: Date;
    status: string;
    price: number;
}
interface IExtendedOrder extends IOrder {
    address: string;
    dishes: CartDish[];
}
type OrderState = {
    currentOrder: IExtendedOrder;
    orders: IOrder[];
    loading: string;
    currentRequestId: undefined | string;
    error: null | unknown;
    errorMessage: null | string;
};
export declare const getOrders: import("@reduxjs/toolkit").AsyncThunk<any, string, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getOrder: import("@reduxjs/toolkit").AsyncThunk<any, {
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
export declare const addOrder: import("@reduxjs/toolkit").AsyncThunk<any, {
    token: string;
    deliveryTime: Date;
    address: string;
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
export declare const confirmOrder: import("@reduxjs/toolkit").AsyncThunk<any, {
    token: string;
    orderId: string;
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
export declare const deleteOrders: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"order/deleteOrders">;
declare const _default: import("redux").Reducer<OrderState, import("redux").AnyAction>;
export default _default;
