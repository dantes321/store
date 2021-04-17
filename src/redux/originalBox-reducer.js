
let initialState = {
    boxes:[
        {id:1,price:400,title:'MiniBox',img:'https://29.img.avito.st/640x480/8116282729.jpg',aos:'fade-right'},
        {id:2,price:600,title:'MiddleBox',img:'https://29.img.avito.st/640x480/8116282729.jpg',aos:'fade-right'},
        {id:3,price:800,title:'BigBox',img:'https://29.img.avito.st/640x480/8116282729.jpg',aos:'fade-left'},
        {id:4,price:1000,title:'MegaBox',img:'https://29.img.avito.st/640x480/8116282729.jpg',aos:'fade-left'},
    ]
}
let originalBoxReducer = (state = initialState,action) =>{

    switch (action.type){

    }
    return state;
}

export default originalBoxReducer;