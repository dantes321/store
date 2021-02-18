import React, {useEffect, useState} from 'react';
import s from './CartItem.module.css'

const CartItem = (props) => {

    let incrementCartItem = () =>{

        setCount(prev => prev + 1)
    }
    let decrementCartItem = () =>{


        if(count> 0){
            setCount(prev => prev - 1)
            console.log(props.counter)
        }

    }

    const [count,setCount] = useState(props.counter)


                return (

                    <div className={s.item}>
                        <ol>
                            <li>
                                <img src={props.src} alt="lol"/>
                                <div><h3>{props.name}</h3></div>
                                <div><h4>{props.price } $</h4></div>
                                <div><h4>Counter: {count}</h4></div>
                                <div className={s.buttons}>
                                    <button onClick={incrementCartItem} className='btn btn-dark'>+</button>
                                    <button onClick={decrementCartItem} className='btn btn-dark'>-</button>
                                </div>

                            </li>
                        </ol>
                    </div>
                )





}

export default CartItem