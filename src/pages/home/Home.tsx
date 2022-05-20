import * as React from "react";
import Header from '../../components/Header/header'
import Carrousel from "../../components/Carousel/carousel";
import ShopIcon from "../../ui-kit/icons/shop";
import Logo from "../../ui-kit/logo/logo";
import FavIcon from "../../ui-kit/icons/favourite";
import AtomIcon from "../../ui-kit/icons/stream";
import { CardWrap, MainSection, Title, TitleContainer } from "../../styles/globalStyle";
import {Card} from '../../components/Card/card'
import { Link } from "react-router-dom";


interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <MainSection>    
        <Header className="withIcon" logo={<Logo/>} icon={<AtomIcon/>} icon2={ <Link to="/mystreams">
        <FavIcon/>
           </Link>}
            icon3={<ShopIcon stroke={"#FFF"}/>}/> 
         <Carrousel/>  
           <TitleContainer>
           <Title className="mobile dark">MY STREAMS</Title>
           </TitleContainer>
           <CardWrap>
              {Array.from(Array(4)).map(() => (
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"small break top white black"} withAction={false} buttonText={""}/>
        ))} 
            </CardWrap>
            </MainSection>
    )
  
};

export default Home;
