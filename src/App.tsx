import React, {useState} from 'react';
import './App.css';
import Accardion from './Components/Accardion/Accordion';
import {Raiting, RatingValueType} from "./Components/Raiting/Raiting";
import OnOff from "./Components/OnOff/OnOff";
import UnconntroledAccardion from "./Components/UncontrolledAccardion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./Components/UncontrolledRaiting/UncontrolledRaiting";
import UncontrolledOnOf from "./Components/UncontrolledOnOff/UncontrolledOnOf";
import {
    ControlledCheckbox,
    ControlledInput, ControlledInput1, ControlledSelect,
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput,
    UncontrolledInput
} from "./Components/UncontrolledInput";


function App() {

    const[ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const[accardionCollapsed, setAccardionCollapsed] = useState<boolean>(false)
    const[switchOn, setSwitchOn] = useState(false)

    const onChangeAccardionCallBack = () => {
        setAccardionCollapsed(!accardionCollapsed)
    }

    const accardionCallBack = (id: number) => alert(`user with ID ${id} should be happy`)

    return (
        <div className='App'>

          {/*  <OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOf onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<UnconntroledAccardion titleValue={'Menu'}/>
            <UnconntroledAccardion titleValue={'Users'}/>*/}
            <UncontrolledRaiting/>
            <Accardion items={[
                {title:'Artem',value: 1},
                {title: 'Kirril',value: 2},
                {title: 'Ivan',value: 3},
                {title:'Anna', value: 4}]}
                       titleValue={'Menu'}
                       collapsedMenu={accardionCollapsed}
                       onChange={onChangeAccardionCallBack}
                       onClick={(value)=>{accardionCallBack(value)}}
            />


           <Raiting value={ratingValue} onClick={setRatingValue}/>
            <UnconntroledAccardion titleValue={'MENU'}/>

            <UncontrolledInput />
            <ControlledInput />
            <div>
            <TrackValueOfUncontrolledInput/>
            </div>
            <div>
                <GetValueOfUncontrolledInputByButtonPress/>
            </div>
            <div>
                <ControlledInput1/>
                <ControlledCheckbox/>
                <ControlledSelect></ControlledSelect>
            </div>
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


