import React from 'react';
import s from './Store.module.css'
import StoreItem from "./StoreItem/StoreItem";

const Store = (props) => {

    let storeItem = props.store.StoreItems.map(el => <StoreItem
        id={el.id}
        name = {el.name}
        price={el.price}
        src={el.src}
        counter={el.counter}
        CartItems = {props.store.CartItems}
        StoreItem = {props.store.StoreItems}
        dispatch = {props.store.dispatch}/>)


    return (

        <div className={s.store}>
            <div className={s.title}>Store items</div>
            <div className={s.items}>


                {storeItem}

            </div>
        </div>
    )
}

export default Store