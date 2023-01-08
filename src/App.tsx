import React, {useState} from 'react';
import './App.css';
import Accardion from './Components/Accardion/Accordion';
import {Raiting, RatingValueType} from "./Components/Raiting/Raiting";
import OnOff from "./Components/OnOff/OnOff";
import UnconntroledAccardion from "./Components/UncontrolledAccardion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./Components/UncontrolledRaiting/UncontrolledRaiting";
import UncontrolledOnOf from "./Components/UncontrolledOnOff/UncontrolledOnOf";


function App() {

    const[ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const[accardionCollapsed, setAccardionCollapsed] = useState<boolean>(false)
    const[switchOn, setSwitchOn] = useState(false)
    return (
        <div className='App'>

          {/*  <OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOf onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<UnconntroledAccardion titleValue={'Menu'}/>
            <UnconntroledAccardion titleValue={'Users'}/>*/}
            <UncontrolledRaiting/>
            <Accardion titleValue={'Menu'} collapsedMenu={accardionCollapsed} onChange={()=>{ setAccardionCollapsed(!accardionCollapsed)}}/>

           <Raiting value={ratingValue} onClick={setRatingValue}/>

           {/* <PageTitle title={'This is APP title'}/>
            <PageTitle title={'My friends'}/>
            Artikle 1
            <Accardion titleValue={'Menu'} callabsedMenu = {true}/>
            <Accardion titleValue={'Users'} callabsedMenu = {false}/>
            <UncontrolledRaiting value = {0}/>
            <UncontrolledRaiting value = {1}/>
            <UncontrolledRaiting value = {2}/>
            <UncontrolledRaiting value = {3}/>
            <UncontrolledRaiting value = {4}/>
            <UncontrolledRaiting value = {5}/>
*/}
        </div>
    );
}

type  PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}



export default App;


