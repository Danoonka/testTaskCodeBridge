import React from 'react';
import Header from "../UI/Header";
import TextField from "./TextField";

const SearchField = ({props}: any) => {

    return (
        <div>
            <Header>Filter by keywords</Header>
            <TextField props ={props}/>
        </div>
    );
};

export default SearchField;