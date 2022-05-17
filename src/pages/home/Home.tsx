import * as React from "react";
import Header from '../../components/Header/header'
import Carrousel from "../../components/Carousel/carousel";
import ShopIcon from "../../ui-kit/icons/shop";
import Logo from "../../ui-kit/logo/logo";
import FavIcon from "../../ui-kit/icons/favourite";
import AtomIcon from "../../ui-kit/icons/stream";


interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>    
        <Header className="withIcon" logo={<Logo/>} icon={<AtomIcon/>} icon2={<FavIcon/>} icon3={<ShopIcon stroke={"#FFF"}/>}/> 
         <Carrousel/>  
        </>
    )
  
};

export default Home;
