import React from "react";
interface IOrderInfo {
    id: string;
    deliveryTime: Date;
    orderTime: Date;
    status: string;
    price: number;
}
declare const OrderInfo: React.FC<IOrderInfo>;
export default OrderInfo;
