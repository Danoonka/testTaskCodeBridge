import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {DateFormatting} from "../utils/DateFormatting";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EastIcon from '@mui/icons-material/East';
import {Link, useNavigate} from "react-router-dom";


const CardBlank = ({props}: any) => {
    // console.log(props)

    return (
        <Card sx={{
            width: 400,
            height: 530,
            background: '#FFFFFF',
            border: 1,
            borderColor: '#EAEAEA',
            borderRadius: 2,
            mb: 5.625
        }}>
            <CardMedia
                sx={{ width: 400, height: 217}}
                image= {props.imageUrl}
                title= {props.title}

            />
            <CardContent>
                <Typography sx={{
                    m: 0.75,
                    width: 150,
                    fontFamily: ['Montserrat', 'sans-serif'],
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: '150%',
                    color: '#363636',
                    opacity: 0.6,
                    verticalAlign: "middle",
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <CalendarTodayIcon sx={{width: 16,
                        height: 16}}/>
                    {DateFormatting(props.publishedAt)}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    height: 58,
                    m: 0.75,
                    mt: 3.125,
                    fontFamily: ['Montserrat', 'sans-serif'],
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 24,
                    color: '#363636',
                    overflow: 'hidden',
                    textOverflow: "ellipsis"
                }}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    mt: 2.5,
                    height: 96,
                    fontFamily: ['Montserrat', 'sans-serif'],
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '150%',
                    color: '#363636',
                    overflow: 'hidden',
                    textOverflow: "ellipsis"
                }}>
                    {props.summary}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={"/detail"} style={{ textDecoration: 'none' }}  state={props}><Button size="small" endIcon={<EastIcon/>} sx={{
                    ml: 0.75,
                    fontFamily: ['Montserrat', 'sans-serif'],
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: '150%',
                    color: '#363636',
                    textTransform: 'none'
                }} >Read more</Button></Link>
            </CardActions>
        </Card>
    );
};

export default CardBlank;