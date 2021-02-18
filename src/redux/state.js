import {rerenderEntireTree} from "../index";

const CHECK_OUT = 'CHECK-OUT';
const CLEAR_CART = 'CLEAR-CART';
const ADD_TO_CART = 'ADD-TO-CART';

let store = {
    StoreItems: [
        {
            counter: 1,
            id: 1,
            name: 'Apple',
            price: 30,
            src: 'https://kot.sh/sites/default/files/styles/large/public/articles-image/apple_main.jpg?itok=kaJ1H3Mw'
        },
        {
            counter: 1,
            id: 2,
            name: 'Banana',
            price: 20,
            src: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
        },
        {
            counter: 1,
            id: 3,
            name: 'Strawberry',
            price: 35,
            src: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-strawberrie-558x600.jpg'
        },
        {
            counter: 1,
            id: 4,
            name: 'Kiwi',
            price: 21,
            src: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg'
        },

    ],
    CartItems: [],
    dispatch(action) {
        if (action.type === CLEAR_CART) {
            let newPrompt = prompt('Are you sure you want to clear the Cart? (y/n)', '')
            if (newPrompt === 'y') {
                this.CartItems = []
                rerenderEntireTree()
            } else {
                alert('Try again!')
            }
        } else if (action.type === CHECK_OUT) {
            alert(`You have bought ${this.CartItems.length} items!`)
            this.CartItems = []
            rerenderEntireTree()
        } else if (action.type === ADD_TO_CART) {

            let newCartItem = {

                id: this.id,
                name: this.name,
                price: this.price,
                src: this.src,
                counter: this.counter

            }
            let isNotContains = false
            if (this.CartItems.length === 0) {
                this.CartItems.unshift(newCartItem)
                isNotContains = true
            } else {
                this.CartItems.forEach(cartItem => {

                    if (cartItem.id === newCartItem.id) {
                        cartItem.counter += 1
                        isNotContains = true
                    }


                })
            }
            if(!isNotContains){
                this.CartItems.push(newCartItem)
            }
            console.log(this.CartItems)

            rerenderEntireTree()
        }
    }


}

export const clearCartActionCreator = () => {

    return {
        type: CLEAR_CART
    }
}
export const checkOutActionCreator = () => {

    return {
        type: CHECK_OUT
    }
}
export const addToCartActionCreator = () => {

    return {
        type: ADD_TO_CART
    }
}

export default store;
window.store = store;
