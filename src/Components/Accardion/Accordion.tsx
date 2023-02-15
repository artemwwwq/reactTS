import React from "react";



type ItemType = {
    title: string
    value: any
}

type AccardionPropsType ={
    titleValue: string
    collapsedMenu: boolean
    onChange: ()=>void
    items: Array<ItemType>
    onClick: (value: any)=> void
}






function Accardion(props: AccardionPropsType) {
       return<div>
           <AccardionTitle title={props.titleValue} onChange={props.onChange}/>
           { !props.collapsedMenu &&  <AccardionBody items={props.items} onClick={props.onClick}/>}
               </div>

}




type AccardionTitlepropsType = {
    title: string
    onChange: ()=> void
}


function AccardionTitle(props: AccardionTitlepropsType) {

    return <h3 onClick={props.onChange}>{props.title}</h3>
}


type BodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any)=> void
}

function AccardionBody(props: BodyPropsType) {



    return <div>
        <ul>
            {props.items.map((el,index)=><li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    </div>
}


export default Accardion;