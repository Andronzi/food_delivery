interface IDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  vegetarian: boolean;
  rating: number;
  category: string;
}

interface IPagination {
  size: number;
  count: number;
  current: number;
}

type IDishDto = { dishes: Array<IDish>; pagination: IPagination };

export { IPagination, IDish, IDishDto };
