export type ThingsToBuyPropsType = {
    id: number,
    title: string,
    expectedPrice: string,
    realPrice: string,
    inCart: boolean
}

export type ShopListPropsType = {
    title: string
    whatToBuy: ThingsToBuyPropsType[]
    deleteItemShop: (id: number) => void
    changeFilter: (newFilterValue: FilterType) => void
}

export type FilterType = "all" | "buy" | "not buy";