import { useAppDispatch } from "@redux/hooks/hooks";
import { addDish, deleteDish, getCartDishes } from "@redux/slices/cartSlice";

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

  const requestDishAddition = async (dishId: string) => {
    const response = await dispatch(
      addDish({ token: localStorage.getItem("token")!, dishId }),
    );

    if (response.meta.requestStatus === "fulfilled") {
      dispatch(getCartDishes(localStorage.getItem("token")!));
    }
  };

  return {
    requestDishDeletion,
    requestDishAddition,
  };
};
