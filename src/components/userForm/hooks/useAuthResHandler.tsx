import { useAppDispatch, useAppSelector } from "@redux/hooks/hooks";
import { getProfile } from "@redux/slices/registerSlice";

const useAuthResHandler = () => {
  const registration = useAppSelector(state => state.registration);
  const dispatch = useAppDispatch();

  const handleResponse = () => {
    if (registration.token) {
      dispatch(getProfile(localStorage.getItem("token")!));
    }
  };

  return {
    handleResponse,
  };
};

export default useAuthResHandler;
