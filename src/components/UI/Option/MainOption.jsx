import React from "react";

const MainOption = (props) => {
    return (
        <option value={props.value}>{props.inner}</option>
    )
}

export default MainOption;