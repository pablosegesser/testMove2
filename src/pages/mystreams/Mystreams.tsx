import * as React from "react";
import {Alignment, ButtonsContain, CardWrap, ImageButton, TextLine, Title, TitleContainer} from '../../styles/globalStyle'
import Header from '../../components/Header/header'
import {Card} from '../../components/Card/card'
import ShopIcon from '../../ui-kit/icons/shop'
import PlayIcon from '../../ui-kit/icons/play'
import ArrowIcon from "../../ui-kit/icons/arrow";
import { Link } from "react-router-dom";

interface MyStreamsProps {}

const MyStreams: React.FunctionComponent<MyStreamsProps> = () => {
    return (
        <>    
        <Header className="withIcon" 
        logo={ <Link to="/"><ArrowIcon/> </Link>}
        text={"MY STREAMS"}/> 
        <CardWrap>
        <Card  title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"horizontal centered tiny medium"} withButton={true} buttonText={"START"}/>
        </CardWrap> 
        <ButtonsContain>
          <Alignment>
            <ImageButton>
            <Link to="/scheduleStream"><PlayIcon/></Link>
            </ImageButton>
            <TextLine>
                SCHEDULE STREAM
            </TextLine>
          </Alignment>
          <Alignment>
            <ImageButton>
            <Link to="/shop"><ShopIcon stroke={"#6667AB"}/></Link>
            </ImageButton>
            <TextLine>
                BROWSE PRODUCTS
            </TextLine>
            </Alignment>
        </ButtonsContain>
        <TitleContainer>
         <Title className="mobile"> UPCOMING </Title>
         </TitleContainer>
         <CardWrap>
           {Array.from(Array(4)).map((v, i) => (
        <Card key={i} title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"small break top"} withButton={false} buttonText={""}/>
         ))} 
         </CardWrap>
       
        <TitleContainer>
        <Title className="mobile">PREVIOUSLY RECORDED</Title>
        </TitleContainer>
      
        <CardWrap>
           {Array.from(Array(4)).map((v, i) => (
        <Card key={i} title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"small break top"} withButton={false} buttonText={""}/>
         ))} 
         </CardWrap>
        </>
    )
  
};

export default MyStreams;
