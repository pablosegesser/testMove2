import Header from "../../components/Header/header";
import { Link } from "react-router-dom";
import ArrowIcon from "../../ui-kit/icons/arrow";
import React  from "react";
import { Button, Section,CardWrap } from "../../styles/globalStyle";
import { EditableCard } from "../../components/Card/editableCard";


const ScheduleStream = () => {
    
  return (
    <> 
    <Section>    
       <Header className="withIcon" 
        logo={ <Link to="/"><ArrowIcon/> </Link>}
        text={"SCHEDULE A STREAM"}/> 
        <EditableCard title={""} description={""} imgUrl={""} className={"black white"} withButton={false} buttonText={""}/>
       <CardWrap>
          <Button>
            NEXT
        </Button>  
       </CardWrap>
    </Section>
    </>
  );
};

export default ScheduleStream;

