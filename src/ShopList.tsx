import React from 'react';
import {FilterType, ShopListPropsType} from "./Typisation";



export const ShopList = (props: ShopListPropsType) => {
    
const onClickHandler = (name: FilterType) => {
    props.changeFilter(name)
}
    return (
        <div>
            <h3>{props.title}</h3>
            <ol>
                {props.whatToBuy.map((item) => {
                        return (
                            <li key={item.id}>
                                <div><b>{item.title}</b>
                                    <button onClick={()=>{props.deleteItemShop(item.id)}}> -x- </button></div>
                                <div>{'expected price: ' + item.expectedPrice}</div>
                                <div>{'real price: ' + item.realPrice}</div>
                                <span>in basket: </span>
                                <input type={"checkbox"} checked={item.inCart}/>
                            </li>
                        )
                    }
                )
                }
            </ol>
            <div>
                <button onClick={()=>onClickHandler("all")}>all</button>
                <button onClick={()=>onClickHandler("buy")}>buy</button>
                <button onClick={()=>onClickHandler("not buy")}>not buy</button>
            </div>
        </div>
    );
};

// () =>{alert('удален из списка товар #' + item.id)}