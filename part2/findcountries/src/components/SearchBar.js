import React, { useState } from 'react';

function SearchBar(props) {
    const [searchParam, setSearchParam] = useState("");
    const textChangeHandler = (event) => {
        setSearchParam(event.target.value);
        console.log("search parameter", event.target.value);
        props.handleTextChange(event.target.value);
    }

    return (
        <form>
            <label>{props.label}</label><input value={searchParam} onChange={textChangeHandler} type="text"></input>
        </form>
    );
}

export default SearchBar;
