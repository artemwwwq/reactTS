import React, {useReducer} from "react";
import {reducer, TOGGLE_COLL} from "./Reducer";

type AccardionPropsType ={
    titleValue: string
   // collapsedMenu: boolean
}

const UnconntroledAccardion = React.memo(UnconntroledAccardionM)

function UnconntroledAccardionM(props: AccardionPropsType) {


    let [state, dispatch] = useReducer(reducer,{collapsed: false})

    const onClickDispatchHandler = () => {
        dispatch({type: TOGGLE_COLL})
    }


    return <div>
            <AccardionTitle title={props.titleValue} onClick = {onClickDispatchHandler}/>
        {!state.collapsed && <AccardionBody />}
    </div>
}



type AccardionTitlepropsType = {
    title: string
    onClick: ()=> void
}


function AccardionTitle(props: AccardionTitlepropsType) {

    return <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
}

function AccardionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
}


export default UnconntroledAccardion;