import React, {useState} from "react";

type AccardionPropsType ={
    titleValue: string
   // collapsedMenu: boolean
}






function UnconntroledAccardion(props: AccardionPropsType) {



    let [callabsedMenu, setCollapsedMenu] = useState(false)


       return<div>
           <AccardionTitle title={props.titleValue} onClick={()=>setCollapsedMenu(!callabsedMenu)}/>

           { !callabsedMenu &&  <AccardionBody/> }
               </div>
}




type AccardionTitlepropsType = {
    title: string
    onClick: ()=>void
}


function AccardionTitle(props: AccardionTitlepropsType) {

    return <h3 onClick={()=> props.onClick() }>{props.title}</h3>
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