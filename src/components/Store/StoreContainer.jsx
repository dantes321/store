import React from 'react';
import Store from "./Store";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return{
        boxes: state.storePage.boxes,

    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Store)