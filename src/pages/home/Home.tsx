import * as React from "react";
import {Button, ButtonContainer} from '../../styles/globalStyle'
import Header from '../../components/Header/header'

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>    
        <Header text={""}/>
        <ButtonContainer>
        <Button type="button" className="secondary" onClick={()=>{}}>
          JOIN
        </Button>
        </ButtonContainer> 
        </>
    )
  
};

export default Home;
