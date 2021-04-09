import React from 'react';
import ConstructorBox from "./Constructor";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        boxes: state.constructorPage.goods.boxes,
        chocolate: state.constructorPage.goods.chocolate,
        snacks: state.constructorPage.goods.snacks,
        others: state.constructorPage.goods.others,
        drinks: state.constructorPage.goods.drinks,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ConstructorBox);



