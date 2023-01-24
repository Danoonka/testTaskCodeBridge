import React, {useEffect, useState} from 'react';
import {Box, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const TextField = ({props}: any) => {
    const [textFieldValue, setTextFieldValue] = useState('')
    const [arr, setArr] = useState([]as any)
    const [dataNew, setDataNew] = useState([] as any)
    const textFieldHandler = (event: any) => {
        setDataNew([])
        event.preventDefault();
        setTextFieldValue(event.target.value)
        setArr( textFieldValue.split(' '));
        arr.map((item: any) => {
            props.articles.map((el: { title: any }) =>{
                if (el.title.toLowerCase().includes(item.toLowerCase())){
                    setDataNew((oldArray: any) => [el, ...oldArray]);
                }
                props.onData(dataNew)
            })
        })
    }




    return (
        <Box boxShadow={2}
             sx = {{ mt: 0, width: 600, height: 50}}>
            <OutlinedInput  onChange={textFieldHandler}
                sx = {{ mt: 0, width: 600, height: 50}}
                id="outlined-adornment-password"
                startAdornment={
                    <InputAdornment position="start" >
                        <SearchIcon sx={{width: 20, height: 20}}/>
                        <Typography
                            sx={{
                            fontFamily: ['Montserrat', 'sans-serif'],
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 16,
                            lineHeight: '150%',
                            color: '#575757'}}
                        />
                    </InputAdornment>
                }
            />
        </Box>
    );
};

export default TextField;