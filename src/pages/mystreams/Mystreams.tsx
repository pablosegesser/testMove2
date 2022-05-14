import * as React from "react";
import {ButtonsContain, CardWrap, ImageButton, Title, TitleContainer} from '../../styles/globalStyle'
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
        <Card  title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"horizontal centered"} withAction={true}/>
        </CardWrap> 
        <ButtonsContain>
          <div>
            <ImageButton>
                <PlayIcon/>
            </ImageButton>
            <div>
                SCHEDULE STREAM
            </div>
          </div>
          <div>
            <ImageButton>
              <ShopIcon/>
            </ImageButton>
            <div>
                BROWSE PRODUCTS
            </div>
            </div>
        </ButtonsContain>
        <TitleContainer>
         <Title> UPCOMING </Title>
         </TitleContainer>
        <CardWrap>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false}/>
        </CardWrap>  
        <TitleContainer>
        <Title>PREVIOUSLY RECORDED</Title>
        </TitleContainer>
      <CardWrap>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={""} withAction={false}/>
        </CardWrap>
        </>
    )
  
};

export default MyStreams;
