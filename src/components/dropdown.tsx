import React, {ChangeEvent, ChangeEventHandler} from 'react';

function Dropdown({items, value, onChange}: {value: string,
    items: string[], onChange: (e:any)=>void}) {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        onChange(e.target.value)
    }

    return (
        <div>

        </div>
    );
}

export default Dropdown;