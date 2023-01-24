import React from 'react';
import {Box, Typography} from "@mui/material";

const Header = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <Box>
            <Typography sx={{mb:0,
                fontFamily: ['Montserrat', 'sans-serif'], fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 16,
                lineHeight: 2.5,
                color: '#363636'}}>{props.children}</Typography>
        </Box>
    );
};

export default Header;