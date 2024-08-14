import React from "react";
import MainOption from "../Option/MainOption";

// options - массив опций в списке
// defaultValue - значение по умолчанию
const MainSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.currentTarget.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map((option) => <MainOption key={option.value} value={option.value} inner={option.inner}/>)}
        </select>
    )
}

export default MainSelect;