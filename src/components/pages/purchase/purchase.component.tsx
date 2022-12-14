import OrderDish from "@components/orders/items/Dish";
import { useAppDispatch, useAppSelector } from "@redux/hooks/hooks";
import { getCartDishes } from "@redux/slices/cartSlice";
import { addOrder } from "@redux/slices/orderSlice";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./purchase.module.scss";
import { toast, Toaster } from "react-hot-toast";

interface IPurchase {
  address: string;
  time: Date;
}

const Purchase = () => {
  const { register, handleSubmit } = useForm<IPurchase>({
    criteriaMode: "all",
  });

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getCartDishes(localStorage.getItem("token")!));
  }, [dispatch]);

  const cart = useAppSelector(state => state.cart);
  const order = useAppSelector(state => state.order);

  const onSubmit: SubmitHandler<IPurchase> = async data => {
    const orderResponse = await dispatch(
      addOrder({
        token: localStorage.getItem("token")!,
        deliveryTime: data.time,
        address: data.address,
      }),
    );

    if (orderResponse.type === "addOrder/rejected") {
      toast.error("Ошибка отправки", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    } else {
      toast.success("Ваш заказ успешно принят", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    }

    await dispatch(getCartDishes(localStorage.getItem("token")!));
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Оформление заказа</h2>
      <p className={styles.title}>Данные доставки</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            placeholder="Адрес"
            {...register("address")}
          />
          <input
            className={styles.dateInput}
            type="datetime-local"
            {...register("time")}
          />
        </div>
        <p className={styles.title2}>Список блюд</p>
        {cart.dishes.map((cartElement, index) => (
          <div className={styles.cartElement}>
            <OrderDish
              amount={cartElement.amount}
              key={index}
              //   dishId={cartElement.id}
              image={cartElement.image}
              name={cartElement.name}
              price={cartElement.totalPrice}
              totalPrice={cartElement.price}
            />

            {index !== cart.dishes.length - 1 && <hr className={styles.hr} />}
          </div>
        ))}
        {cart.dishes.length ? (
          <input
            type="submit"
            className={styles.submit}
            value="Подтвердить заказ"
          />
        ) : null}
      </form>
      <>
        {order.error && (
          <p className={styles.error}>
            При отправке формы возникла проблема: {order.errorMessage}
          </p>
        )}
      </>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default Purchase;
