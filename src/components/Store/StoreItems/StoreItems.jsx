import React from 'react';
import s from './StoreItems.module.scss';
import Item from "./Item/Item";

const StoreItems = (props) => {

    let items = props.storeItems.map(el => <Item  img ={el.img}
                                                  price = {el.price}
                                                  title = {el.title}
                                                  description = {el.description}/>)


    return (
        <div className={s.storeItems}>
            {items}
        </div>
    )
};

export default StoreItems;
