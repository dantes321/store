import {rerenderEntireTree} from "./index";

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
    dispatch(action){
        if(action.type === 'CLEAR-CART'){
            let newPrompt = prompt('Are you sure you want to clear the Cart? (y/n)','')
            if (newPrompt === 'y'){
                this.CartItems = []
                rerenderEntireTree()
            }
            else {
                alert('Try again!')
            }
        }

        else if (action.type === 'CHECK-OUT'){
            alert(`You have bought ${this.CartItems.length} items!`)
            this.CartItems = []
            rerenderEntireTree()
        }

        else if(action.type==='ADD-TO-CART'){

            let newCartItem = {

                id: this.id,
                name: this.name,
                price: this.price,
                src: this.src,
                counter: this.counter

            }
            if(this.CartItems.length === 0){
                this.CartItems.unshift(newCartItem)
            }
            this.CartItems.forEach(cartItem => {

                if(cartItem.id !== newCartItem.id ){
                    this.CartItems.unshift(newCartItem)
                    cartItem.counter +=1
                }
                else if (cartItem.id === newCartItem.id){
                    cartItem.counter +=1
                }


            })

            console.log(this.CartItems.length)

            rerenderEntireTree()
        }
    }


}


export default store;
window.store = store;
