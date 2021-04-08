import React from 'react';
import {connect} from "react-redux";
import StoreItems from "./StoreItems";

let mapStateToProps = (state) => {
    return{
        storeItems: state.storePage.storeItems
    }
}

let mapDispatchToProps = (dispatch) => {
    return{

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(StoreItems)


