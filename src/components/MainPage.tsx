import React, {useState} from 'react';
import {Box} from "@mui/material";
import SearchField from "./searchField/SearchField";
import CardField from "./cardField/CardField";

const MainPage = ({dataLoad}: any) => {


    return (
        <Box sx={{ml: 9.75, mt: 6.25, mr: 9.75}}>
            {dataLoad ? <SearchField props={dataLoad} onData={dataLoad.parentCallback}/> : <p>Loading...</p>}
            {dataLoad ? <CardField props={dataLoad}/> : <p>Loading...</p>}
        </Box>
    );
};

export default MainPage;