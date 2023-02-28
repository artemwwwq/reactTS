import React, {useState} from 'react';
import './App.css';
import Accardion from './Components/Accardion/Accordion';
import {RatingValueType} from "./Components/Raiting/Raiting";
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
import {Select} from "./Components/Select/select";
import {HelpsToReactMemo} from "./Components/UseMemo";


function App() {

    const[ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const[accardionCollapsed, setAccardionCollapsed] = useState<boolean>(false)
    const[switchOn, setSwitchOn] = useState(false)


    const selectChange = () => {
        console.log(232)
    }

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


      <div>
          <HelpsToReactMemo/>
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


