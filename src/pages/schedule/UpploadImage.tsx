import Header from "../../components/Header/header";
import { Link } from "react-router-dom";
import ArrowIcon from "../../ui-kit/icons/arrow";
import { Button, Section,CardWrap, Content } from "../../styles/globalStyle";
import { Card } from "../../components/Card/card";
import * as React from 'react';
import Uppload from '../../components/Uppload/uppload'

const UpploadImage = () => {
    
  return (
    <> 
    <Section>    
       <Header className="withIcon" 
        logo={ <Link to="/"><ArrowIcon/> </Link>}
        text={"SCHEDULE A STREAM"}/> 
        <CardWrap className="top"> 
           <Uppload/> 
          <Card withoutImage title={"your title will go here"} name={'ASHLEY BENSON'} description={'your descrption will be in this cell, up to 4 lines long.'} className={"small non-image break photo top white black font-m"} withButton={false} buttonText={""}/>
        </CardWrap>
    
        <Content>
          <CardWrap>
          <Link to="/scheduleStream">
          <Button className="tiny">
            NEXT
        </Button>
        </Link>
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

export default UpploadImage;

