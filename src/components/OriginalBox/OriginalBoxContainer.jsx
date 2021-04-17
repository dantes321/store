import React from 'react';
import OriginalBox from "./OriginalBox";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        boxes: state.originalBoxPage.boxes
    }
}
let mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OriginalBox);