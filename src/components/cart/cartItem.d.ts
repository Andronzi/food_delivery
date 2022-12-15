import React from "react";
interface ItemProps {
    dishId: string;
    image: string;
    name: string;
    price: number;
    amount: number;
}
declare const CartItem: React.FC<ItemProps>;
export default CartItem;
