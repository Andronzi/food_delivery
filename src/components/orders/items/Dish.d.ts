import React from "react";
interface IDishProps {
    image: string;
    name: string;
    price: number;
    totalPrice: number;
    amount: number;
}
declare const OrderDish: React.FC<IDishProps>;
export default OrderDish;
