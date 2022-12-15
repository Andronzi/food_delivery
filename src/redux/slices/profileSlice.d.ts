export interface User {
    fullName: string;
    password: string;
    email: string;
    address: string;
    birthDate: Date;
    gender: string;
    phoneNumber: string;
}
type ProfileState = {
    user: User;
    isOpen: boolean;
    loading: string;
    currentRequestId: undefined | string;
    error: null | unknown;
    errorMessage: null | string;
    isRedirected: boolean;
};
export declare const getProfile: import("@reduxjs/toolkit").AsyncThunk<any, string, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const editProfile: import("@reduxjs/toolkit").AsyncThunk<any, {
    token: string;
    data: User;
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
export declare const toggleOpenOfUserEditForm: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "profile/toggleOpenOfUserEditForm">, deleteUser: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"profile/deleteUser">;
declare const _default: import("redux").Reducer<ProfileState, import("redux").AnyAction>;
export default _default;
