import * as React from "react";
import Header from '../../components/Header/header'
import Carrousel from "../../components/Carousel/carousel";


interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>    
        <Header text={""}/>
         <Carrousel/>  
        </>
    )
  
};

export default Home;
