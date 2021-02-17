import React, {useEffect, useState} from 'react';
import s from './CartItem.module.css'

const CartItem = (props) => {





                return (

                    <div className={s.item}>
                        <ol>
                            <li>
                                <img src={props.src} alt="lol"/>
                                <div><h3>{props.name}</h3></div>
                                <div><h4>{props.price } $</h4></div>
                                <div><h4>Counter: {props.counter}</h4></div>

                            </li>
                        </ol>
                    </div>
                )





}

export default CartItem