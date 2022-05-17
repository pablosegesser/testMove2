import * as React from "react";
import {Alignment, ButtonsContain, CardWrap, ImageButton, Title, TitleContainer} from '../../styles/globalStyle'
import Header from '../../components/Header/header'
import {Card} from '../../components/Card/card'
import ShopIcon from '../../ui-kit/icons/shop'
import PlayIcon from '../../ui-kit/icons/play'

interface MyStreamsProps {}

const MyStreams: React.FunctionComponent<MyStreamsProps> = () => {
    return (
        <>    
        <Header text={"MY STREAMS"}/> 
        <CardWrap>
        <Card  title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"horizontal centered"} withAction={true} buttonText={"START"}/>
        </CardWrap> 
        <ButtonsContain>
          <Alignment>
            <ImageButton>
                <PlayIcon/>
            </ImageButton>
            <div>
                SCHEDULE STREAM
            </div>
          </Alignment>
          <Alignment>
            <ImageButton>
              <ShopIcon stroke={"#6667AB"}/>
            </ImageButton>
            <div>
                BROWSE PRODUCTS
            </div>
            </Alignment>
        </ButtonsContain>
        <TitleContainer>
         <Title> UPCOMING </Title>
         </TitleContainer>
        <CardWrap>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false} buttonText={""}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false} buttonText={""}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false} buttonText={""}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false} buttonText={""}/>
        </CardWrap>  
        <TitleContainer>
        <Title>PREVIOUSLY RECORDED</Title>
        </TitleContainer>
      <CardWrap>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false} buttonText={""}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false} buttonText={""}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false} buttonText={""}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false} buttonText={""}/>
        </CardWrap>
        </>
    )
  
};

export default MyStreams;
