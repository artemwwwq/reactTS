import React from "react";

type AccardionPropsType ={
    titleValue: string
    collapsedMenu: boolean
    onChange: ()=>void
}






function Accardion(props: AccardionPropsType) {
       return<div>
           <AccardionTitle title={props.titleValue} onChange={props.onChange}/>
           { !props.collapsedMenu &&  <AccardionBody/>}
               </div>

}




type AccardionTitlepropsType = {
    title: string
    onChange: ()=> void
}


function AccardionTitle(props: AccardionTitlepropsType) {

    return <h3 onClick={props.onChange}>{props.title}</h3>
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


export default Accardion;