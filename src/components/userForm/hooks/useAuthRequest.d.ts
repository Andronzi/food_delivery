import { Auth, User } from "@redux/slices/registerSlice";
import { AsyncThunk } from "@reduxjs/toolkit";
declare const useAuthRequest: () => {
    sendRequest: (asyncThunk: AsyncThunk<any, any, any>, data: User | Auth) => Promise<void>;
};
export default useAuthRequest;
