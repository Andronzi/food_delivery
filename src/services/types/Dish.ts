interface IDish {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    vegetarian: boolean;
    rating: number;
    catrgory: string;
}

interface IPagination {
    size: number;
    count: number;
    current: number;
}

type IDishDto = Array<IDish> & IPagination;

export { IPagination, IDish, IDishDto };