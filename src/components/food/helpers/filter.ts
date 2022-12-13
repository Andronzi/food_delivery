export const assignFilters = async (searchParams: any) => {
    const filters = {
        page: 1,
        vegetarian: false
    } as {
        page: number,
        vegetarian: boolean,
        categories: string[],
        sorting: string
    }

    console.log([...searchParams]);

    const page = [searchParams.filter((element: any) => element[0] === "page").map((element: any) => element[1])];
    const vegetarian = searchParams.filter((element: any) => element[0] === "vegetarian").map((element: any) => element[1]);
    const categories = searchParams.filter((element: any) => element[0] === "categories").map((element: any) => element[1]);
    const sorting = searchParams.filter((element: any) => element[0] === "sorting").map((element: any) => element[1]);

    if (page.length > 0) {
        filters.page = +page[0];
    }

    if (vegetarian.length > 0) {
        filters.vegetarian = vegetarian
    }

    if (categories.length > 0) {
        // @ts-ignore
        filters.categories = categories;
    }

    if (sorting.length > 0) {
        filters.sorting = sorting;
    }
    
    if (filters.page < 1) {
        filters.page = 1;
    }

    console.log(filters);

    return filters;
}