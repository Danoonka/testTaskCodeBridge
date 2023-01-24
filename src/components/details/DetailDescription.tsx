import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const DetailDescription = ({props}: any) => {
    console.log(props)
    return (
        <Container sx={{
            mt: -20,
        }}>
            <Box sx={{
                bgcolor: 'white'
            }}>
                <Typography>
                    {props.title}
                </Typography>
                <Typography>
                    {props.content.repeat(10)}
                </Typography>
            </Box>
        </Container>
    );
};

export default DetailDescription;