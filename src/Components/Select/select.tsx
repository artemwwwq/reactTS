import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export const Select = (props: SelectPropsType) => {

    const selecteItem = props.items.find(i=>i.value === props.value)

    return (
        <div>
            <h3>{selecteItem && selecteItem.title}</h3>
        {/*   <div>{props.items.find(el=> el.value === value)}</div>*/}
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    );

};

