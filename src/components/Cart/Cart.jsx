import React from 'react';
import s from './Cart.module.css'
import CartItem from "./CartItem/CartItem";
import {checkOutActionCreator, clearCartActionCreator} from "../../redux/state";



const Cart = (props) => {

    let clearCart = () => {
        props.store.dispatch(clearCartActionCreator())
    }
    let checkOut = () => {
        props.store.dispatch(checkOutActionCreator())
    }

    let newCartItem = props.store.CartItems.map(el => <CartItem
        name={el.name}
        price={el.price}
        id={el.id}
        src={el.src}
        counter={el.counter}/>)

    if (props.store.CartItems != '') {
        return (

            <div className={s.cart}>
                <div className={s.products}>
                    <h2>Products</h2>
                    {newCartItem}
                </div>
                <div className={s.data}>
                    <div className={s.dataInner}>
                        <div>Total price</div>
                        <div>####</div>
                        <div>Products</div>
                        <div>####</div>
                        <div className={s.buttons}>
                            <button onClick={clearCart} className='btn-dark'>Clear cart</button>
                            <button onClick={checkOut} className='btn-success'>Check out</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (

            <div className={s.cart}>
                <div className={s.products}>
                    <div className={s.emptyText}>It's empty here , still empty..</div>

                </div>
            </div>
        )
    }
}

export default Cart