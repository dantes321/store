
let initialState = {
    storeItems: [
        {id:1, img:'https://static.tildacdn.com/tild3635-6435-4235-b263-633963346638/IMG_0604.jpg', price:425,title:'Солоденьке для Солоденької',description:'Невеликий бокс зі смаколиками та цікавим джемом'},
        {id:2, img:'https://static.tildacdn.com/tild6236-6339-4262-b433-363736323838/IMG_0620.jpg', price:395,title:'Зростаючий S',description:'Набір зі зростаючим олівцем, горщиком та смаколиками'},
        {id:3, img:'https://static.tildacdn.com/tild3166-6437-4438-a333-646661616630/92225834-2554-4FA3-A.jpg', price:350,title:'Весняний комплімент №3 ',description:'Ще один затишний весняний бокс-комлімент. Чудово підійде в якості корпоративного подарунку'},
        {id:4, img:'https://static.tildacdn.com/tild3466-6662-4631-b832-396537303265/IMG_0624.jpg', price:420,title:'Весняний комплімент №3 ',description:'Ще один затишний весняний бокс-комлімент. Чудово підійде в якості корпоративного подарунку'},
        {id:5, img:'https://static.tildacdn.com/tild3338-3362-4063-a536-306364373734/3C853B84-3804-4CFF-8.jpg', price:410,title:'Весняний комплімент №3 ',description:'Ще один затишний весняний бокс-комлімент. Чудово підійде в якості корпоративного подарунку'},
        {id:6, img:'https://static.tildacdn.com/tild6535-3830-4462-b233-393830356131/42C09E52-23D3-4656-A.jpg', price:310,title:'Весняний комплімент №3 ',description:'Ще один затишний весняний бокс-комлімент. Чудово підійде в якості корпоративного подарунку'},


    ]
}

let storeReducer = (state = initialState, action) => {

    switch (action.type){

    }

    return state;
}

export default storeReducer;