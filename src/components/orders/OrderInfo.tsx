import { getDate, getDateTime, getTime } from "@components/helpers/time";
import React from "react";
import { useNavigate } from "react-router";
import styles from "./order.scss";

interface IOrderInfo {
  id: string;
  deliveryTime: Date;
  orderTime: Date;
  status: string;
  price: number;
}

const OrderInfo: React.FC<IOrderInfo> = ({
  id,
  deliveryTime,
  orderTime,
  status,
  price,
}) => {
  const navigate = useNavigate();
  const outputDeliveryTime = getDate(new Date(orderTime));
  const outputOrderTime = getTime(new Date(deliveryTime));
  const outputOderDateTime = getDateTime(new Date(deliveryTime));
  return (
    <div
      className={styles.orderCard}
      onClick={() => navigate(`/order/${id}`)}>
      <p className={styles.title}>Заказ от {outputDeliveryTime}</p>
      <p className={styles.subtitle}>
        Статус заказа - {status === "InProcess" ? "В обработке" : "Доставлен"}
      </p>
      {status === "InProcess" ? (
        <p className={styles.subtitle}>Доставка ожидается {outputOrderTime}</p>
      ) : (
        <p className={styles.subtitle}>Доставлен: {outputOderDateTime}</p>
      )}
      <p className={styles.price}>
        Стоимость заказа: <span className={styles.priceValue}>{price}₽</span>
      </p>
    </div>
  );
};

export default OrderInfo;
