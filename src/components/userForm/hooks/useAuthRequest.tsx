import { useAppDispatch } from "@redux/hooks/hooks";
import { Auth, User } from "@redux/slices/registerSlice";
import { AsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const useAuthRequest = () => {
  const dispatch = useAppDispatch();

  const sendRequest = async (
    asyncThunk: AsyncThunk<any, any, any>,
    data: User | Auth,
  ) => {
    const asyncResponse = await dispatch(asyncThunk(data));
    if (
      asyncResponse.type === "registerUser/rejected" ||
      asyncResponse.type === "loginUser/rejected"
    ) {
      toast.error("Возникла ошибка", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    } else {
      toast.success("Отправка данных прошла успешно", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    }
  };

  return {
    sendRequest,
  };
};

export default useAuthRequest;
