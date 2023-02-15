import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
        {/*   <div>{props.items.find(el=> el.value === value)}</div>*/}
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );

};

