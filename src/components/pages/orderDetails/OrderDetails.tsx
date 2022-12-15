import { getDateTime } from "@components/helpers/time";
import OrderDish from "@components/orders/items/Dish";
import { useAppDispatch, useAppSelector } from "@redux/hooks/hooks";
import { confirmOrder, getOrder } from "@redux/slices/orderSlice";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useParams } from "react-router";
import styles from "./purchase.module.scss";

const OrderDetails = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector(state => state.order.currentOrder);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(
      getOrder({ token: localStorage.getItem("token")!, id: id ? id : "" }),
    );
  }, [dispatch, id]);

  const handleConfirmButton = async () => {
    const confirmResponse = await dispatch(
      confirmOrder({
        token: localStorage.getItem("token")!,
        orderId: id ? id : "",
      }),
    );

    if (confirmResponse.type === "confirmOrder/rejected") {
      toast.error("Возникла ошибка", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    } else {
      toast.success("Доставка подтверждена", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
      dispatch(
        getOrder({ token: localStorage.getItem("token")!, id: id ? id : "" }),
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.order}>
        <h2 className={styles.header}>
          Заказ #{order.id ? order.id.substring(0, 8) : ""}
        </h2>
        <p className={styles.title}>
          Дата заказа: {getDateTime(new Date(order.orderTime))}
        </p>
        <p className={styles.title}>
          Дата доставки: {getDateTime(new Date(order.deliveryTime))}
        </p>
        <p className={styles.title}>Адрес доставки: {order.address}</p>
        <p className={styles.title}>
          Статус заказа -{" "}
          {order.status === "InProcess" ? "В обработке" : "Доставлено"}
        </p>
        <button
          className={styles.submit}
          onClick={handleConfirmButton}>
          Подтвердить доставку
        </button>
        <div className={styles.dishes}>
          {order.dishes &&
            order.dishes.map((dish, index) => (
              <div className={styles.cartElement}>
                <OrderDish
                  amount={dish.amount}
                  key={index}
                  //   dishId={cartElement.id}
                  image={dish.image}
                  name={dish.name}
                  price={dish.totalPrice}
                  totalPrice={dish.price}
                />

                {index !== order.dishes.length - 1 && (
                  <hr className={styles.hr} />
                )}
              </div>
            ))}
        </div>
        <p className={styles.fullPrice}>
          Стоимость заказа: <span>{order.price}₽</span>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default OrderDetails;
