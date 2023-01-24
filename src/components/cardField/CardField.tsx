import Header from "../UI/Header";
import CardBlank from "./CardBlank";
import {Box} from "@mui/material";


const CardField = ({props}: any) => {

    return (
        <Box sx={{mt:5}}>
            <Header>
                Results: {props.length}
            </Header>
            <Box sx={{height:1, borderBottom: 1, borderColor: '#EAEAEA'}}/>
            <Box sx ={{display: 'flex', width: 1290, flexWrap: 'wrap' , mt: 5.625, justifyContent: 'space-between'}}>
                {props.map((item: any) =>
                    <CardBlank props={item} key={props.name}/>
                )}
            </Box>
        </Box>
    );
};

export default CardField;