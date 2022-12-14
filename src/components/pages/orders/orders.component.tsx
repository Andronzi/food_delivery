import OrderInfo from "@components/orders/OrderInfo";
import { useAppDispatch, useAppSelector } from "@redux/hooks/hooks";
import { getOrders } from "@redux/slices/orderSlice";
import React from "react";
import styles from "./purchase.module.scss";

const Orders = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getOrders(localStorage.getItem("token")!));
  }, [dispatch]);

  const order = useAppSelector(state => state.order);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Последние заказы</h2>
      <p className={styles.title}>Данные доставки</p>
      {order.orders.map((order, index) => (
        <OrderInfo
          key={index}
          id={order.id}
          deliveryTime={order.deliveryTime}
          orderTime={order.orderTime}
          price={order.price}
          status={order.status}
        />
      ))}
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
    </div>
  );
};

export default Orders;
