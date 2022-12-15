export interface User {
    fullName: string;
    password: string;
    email: string;
    address: string;
    birthDate: Date;
    gender: string;
    phoneNumber: string;
}
export interface Auth {
    password: string;
    email: string;
}
type State = {
    loading: string;
    currentRequestId: undefined | string;
    error: null | unknown;
    errorMessage: null | string[];
    token: null | string;
};
export declare const createUser: import("@reduxjs/toolkit").AsyncThunk<any, User, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const authUser: import("@reduxjs/toolkit").AsyncThunk<any, Auth, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const logout: import("@reduxjs/toolkit").AsyncThunk<any, string, {
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
