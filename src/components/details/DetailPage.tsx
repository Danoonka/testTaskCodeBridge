import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import WestIcon from '@mui/icons-material/West';

const DetailPage = () => {
    const [height, setHeight] = useState(0)
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const photoRef = useRef() as MutableRefObject<HTMLDivElement>;


    useEffect(() => {
        setHeight(ref.current.clientHeight * 2 + photoRef.current.clientHeight + 150)
    }, [])
    let location = useLocation();
    const props = location.state
    return (
        <Card>
            <CardMedia ref={photoRef}
                image= {props.imageUrl}
                // image = {zapImg}
                title= {props.title}
                sx={{
                    position: 'absolute',
                    width: 1440,
                    height: 245,
                    left: 0,
                    top: 0,
                }}
            />
            <Box >
                <CardContent  ref={ref}  sx={{
                    position: 'absolute',
                    width: 1290,
                    left: 75,
                    top: 150,
                    background: '#FFFFFF',
                    border: 1,
                    borderColor: '#EAEAEA',
                    borderRadius: 0.625,
                    textAlign: 'center',
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)"
                }}>
                    <Typography gutterBottom variant="h5" component="div"
                                sx={{
                                    mt: 4.375,
                                    fontFamily: ['Montserrat', 'sans-serif'],
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: 24,
                                    color: '#363636',

                                }}>
                        {props.title}
                    </Typography>
                    <Typography  variant="body2" color="text.secondary"
                                 sx={{
                                     mt: 6.25,
                                     fontFamily: ['Montserrat', 'sans-serif'],
                                     fontStyle: 'normal',
                                     fontWeight: 400,
                                     fontSize: 18,
                                     color: '#000000'
                                 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
                        Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed.
                        <br/>
                        <br/>
                        At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper mattis aliquet ornare. Cursus maecenas massa, arcu ac adipiscing odio facilisis ac eu.
                        In eget ipsum, sed ultrices tempor consequat, elementum cras porta. Sagittis etiam dictumst at duis praesent a. Malesuada odio amet aenean diam. Tincidunt lorem faucibus neque aliquet lobortis feugiat sed aliquam pulvinar. Praesent aliquet ut tempus feugiat placerat quis duis mauris nibh. Eu ullamcorper id feugiat sit risus turpis mi. Tristique posuere sed convallis magna eu vulputate. Cum sit in hac felis blandit. Cursus eu porta lectus mollis nisi, consectetur ac. Ornare vitae lectus iaculis nibh ac et. Adipiscing amet in parturient etiam fames. Facilisi id eu sem in elementum. Lacus, ipsum morbi vel purus ut arcu laoreet id eu.
                        <br/>
                        <br/>
                        Libero, tincidunt aliquet parturient dolor sapien faucibus nunc. In ipsum suscipit nec pharetra non vitae sagittis aenean sit. Consequat integer sit netus pellentesque scelerisque ut. Elit augue dui viverra facilisi varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet magna in in varius. Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu non massa donec sit duis. Libero nascetur mauris, ac in aliquet cras duis donec. Sit porttitor sociis aliquam aliquet odio arcu a viverra. Proin convallis bibendum venenatis non orci id proin vitae. Faucibus eleifend fermentum sit dictum sagittis fermentum. At id nisi, aliquet ut sagittis proin enim.
                        Eget in aenean mi a elit viverra amet urna, diam. Cursus id viverra amet adipiscing. Pretium, amet amet mi mauris urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet gravida convallis elementum, metus cras. Adipiscing suspendisse etiam tellus tellus arcu. At accumsan rhoncus, fringilla ut scelerisque consectetur.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
                        Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla.
                    </Typography>
                </CardContent>
            </Box>

            <CardActions sx={{
                position: "absolute",
                width: 200,
                left: 75,
                mt: {height}
            }}>
                <Link to={"/"} style={{ textDecoration: 'none' }} ><Button startIcon={<WestIcon/>} sx={{
                    fontFamily: ['Montserrat', 'sans-serif'],
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: '150%',
                    color: '#363636',
                    textTransform: 'none'
                }}>Back to homepage</Button></Link>
            </CardActions>
        </Card>
    );
};

export default DetailPage;