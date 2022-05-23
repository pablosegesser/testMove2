import * as React from "react";
import {CardWrap,Title, TitleContainer} from '../../styles/globalStyle'
import Header from '../../components/Header/header'
import {Card} from '../../components/Card/card'
import ArrowIcon from "../../ui-kit/icons/arrow";
import { Link } from "react-router-dom";

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
    return (
        <>    
        <Header className="withIcon" 
        logo={ <Link to="/"><ArrowIcon/> </Link>}
        text={"MY STREAMS"}/> 
        <TitleContainer>
         <Title className="mobile"> ASHLEY'S STREAMS </Title>
         </TitleContainer>
         <CardWrap>
           {Array.from(Array(4)).map(() => (
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"small break top"} withAction={false} buttonText={""}/>
         ))} 
         </CardWrap>
        </>
    )
};

export default Profile;
