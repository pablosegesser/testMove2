import * as React from "react";
import { CardWrap,Title, TitleContainer} from '../../styles/globalStyle'
import Header from '../../components/Header/header'
import {Card} from '../../components/Card/card'
import ArrowIcon from "../../ui-kit/icons/arrow";
import { Link } from "react-router-dom";
import { Cart } from "../../components/Cart/cart"
import HeaderWithImage from "../../components/HeaderWithImage.tsx/headerWithImage";

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
    return (
        <>    
        <Header  headerWithImage={<HeaderWithImage title="ASHLEY BENSON" subtitle="124K FOLLOWERS" buttonText={"EDIT PROFILE"}/>} className="withIcon withImage" img="https://cdn.galleries.smcloud.net/t/galleries/gf-FsbC-uLmD-vqgG_ashley-benson-1920x1080-nocrop.jpg" 
        logo={ <Link to="/"><ArrowIcon/></Link>}/>
        <TitleContainer>
         <Title className="mobile"> ASHLEY'S STREAMS </Title>
         </TitleContainer>
         <CardWrap>
           {Array.from(Array(4)).map(() => (
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"small break top"} withButton={false} buttonText={""}/>
         ))} 
         </CardWrap>
         <TitleContainer>
         <Title className="mobile"> ASHLEY'S SHOP </Title>
         </TitleContainer>
         {Array.from(Array(4)).map(() => (
        <Cart title={"REVOLVE"} price={'30.00'} imgUrl={'https://www.pruneshop.cl/media/catalog/product/cache/48a04200998cde1bd0724f004dc7dd57/P/I/PI02932CHAA1000_0_2.jpg'} description={'fashion worldest event'} className={""} />
         ))} 
        </>
    )
};

export default Profile;
