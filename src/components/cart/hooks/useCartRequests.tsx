import { useAppDispatch } from "@redux/hooks/hooks";
import { deleteDish, getCartDishes } from "@redux/slices/cartSlice";

export const useCartRequests = () => {
  const dispatch = useAppDispatch();

  const requestDishDeletion = async (dishId: string, increase: boolean) => {
    const response = await dispatch(
      deleteDish({ token: localStorage.getItem("token")!, dishId, increase }),
    );

    if (response.meta.requestStatus === "fulfilled") {
      dispatch(getCartDishes(localStorage.getItem("token")!));
    }
  };

  return {
    requestDishDeletion,
  };
};
