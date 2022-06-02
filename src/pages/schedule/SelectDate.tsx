import Header from "../../components/Header/header";
import { Link } from "react-router-dom";
import ArrowIcon from "../../ui-kit/icons/arrow";
import { Button, Section,CardWrap, Content, Container } from "../../styles/globalStyle";
import * as React from 'react';
import StaticDatePicker from "../../components/DatePicker/datepicker";

const SelectDate = () => {

  return (
    <> 
    <Section>    
       <Header className="withIcon" 
        logo={ <Link to="/"><ArrowIcon/> </Link>}
        text={"SCHEDULE A STREAM"}/> 
   <Container>
    <CardWrap className="top">
     <StaticDatePicker/>
    </CardWrap> 
        <Content>
          <CardWrap className="top">
         <Link to="/upploadImage">
           <Button className="tiny">
            NEXT
        </Button>
        </Link>
        </CardWrap>   
        </Content>
     </Container>
    </Section>
    </>
  );
};

export default SelectDate;

