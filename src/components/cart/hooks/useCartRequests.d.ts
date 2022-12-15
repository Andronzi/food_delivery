export declare const useCartRequests: () => {
    requestDishDeletion: (dishId: string, increase: boolean) => Promise<void>;
    requestDishAddition: (dishId: string) => Promise<void>;
};
