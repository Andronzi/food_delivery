import React from "react";
type CardInfoProps = {
    id: string;
    name: string;
    description: string;
    category: string;
    rating: number;
    price: number;
};
declare const CardInfo: React.FC<CardInfoProps>;
export default CardInfo;
