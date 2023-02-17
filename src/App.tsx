import React, { useState } from 'react';
import './App.css';
import { ShopList } from "./ShopList";
import { ThingsToBuyPropsType, FilterType } from "./Typisation";



function App() {

    const [thingsToBuy, setThingsToBuy] = useState<ThingsToBuyPropsType[]>([
        { id: 1, title: 'Milk', expectedPrice: '$1.99', realPrice: '$1.99', inCart: true },
        { id: 2, title: 'Bread', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true },
        { id: 3, title: 'Coca-Cola', expectedPrice: '$1.49', realPrice: '$1.49', inCart: true },
        { id: 4, title: 'Eggs', expectedPrice: '$2.49', realPrice: '$3.99', inCart: false },
        { id: 5, title: 'Cakes', expectedPrice: '$4.99', realPrice: '$6.99', inCart: false },
    ])

    const [filter, setFilter] = useState<FilterType>("all")



    const deleteItemShop = (id: number) => {
        let things = thingsToBuy.filter(th => th.id !== id)
        setThingsToBuy(things)
    }

    let thingsToShopList = thingsToBuy

    thingsToShopList = filter === "buy"
        ? thingsToShopList.filter((el) => el.inCart)
        : filter === "not buy"
            ? thingsToShopList.filter((el) => !el.inCart)
            : thingsToBuy



    // let thingsToShopList = thingsToBuy
    // if (filter === "buy") {
    //     thingsToShopList = thingsToShopList.filter((el) => el.inCart) //el.inCart === true
    // }
    // if (filter === "not buy") {
    //     thingsToShopList = thingsToShopList.filter((el) => !el.inCart) //el.inCart === false
    // }


    const changeFilter = (newFilterValue: FilterType) => {
        setFilter(newFilterValue)
    }

    return (
        <div className="App">
            <ShopList
                title={"What to buy"}
                whatToBuy={thingsToShopList}
                deleteItemShop={deleteItemShop}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
