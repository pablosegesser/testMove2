import Header from "../../components/Header/header";
import { Link } from "react-router-dom";
import ArrowIcon from "../../ui-kit/icons/arrow";
import { Button, Section,CardWrap, Content } from "../../styles/globalStyle";
import { Card } from "../../components/Card/card";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ScheduleStream = () => {
    
  return (
    <> 
    <Section>    
       <Header className="withIcon" 
        logo={ <Link to="/"><ArrowIcon/> </Link>}
        text={"SCHEDULE A STREAM"}/> 
        <CardWrap>
          <Card  title={"your title will go here"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'your descrption will be in this cell, up to 4 lines long.'} className={"small break edit top white black font-m"} withButton={false} buttonText={""}/>
        </CardWrap>
        {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Title" variant="filled" />
      <TextField
          id="standard-textarea"
          label="Subtitle"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
    </Box> */}
        <Content>
          <CardWrap>
          <Button className="tiny">
            NEXT
        </Button>
        </CardWrap>
        <CardWrap>
        <Button className="border-off">
            SAVE DRAFT
        </Button>  
       </CardWrap>    
        </Content>
     
    </Section>
    </>
  );
};

export default ScheduleStream;

