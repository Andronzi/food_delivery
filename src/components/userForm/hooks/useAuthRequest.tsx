import { useAppDispatch } from "@redux/hooks/hooks";
import { Auth, User } from "@redux/slices/registerSlice";
import { AsyncThunk } from "@reduxjs/toolkit";

const useAuthRequest = () => {
  const dispatch = useAppDispatch();

  const sendRequest = async (
    asyncThunk: AsyncThunk<any, any, any>,
    data: User | Auth,
  ) => {
    await dispatch(asyncThunk(data));
  };

  return {
    sendRequest,
  };
};

export default useAuthRequest;
