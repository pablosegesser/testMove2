import React from "react";
import {Link} from "react-router-dom";
// components
import Carrousel from "../../components/Carousel/carousel";
import Header from "../../components/Header/header";
import Swipper from "../../components/Swipper/swipper";
import {AlternativeCard} from "../../components/Card/alternativeCard";
// styles
import {
  CardWrap,
  MainSection,
  Title,
  TitleContainer,
} from "../../styles/globalStyle";
// icons
import FavIcon from "../../ui-kit/icons/favourite";
import ShopIcon from "../../ui-kit/icons/shop";
import Logo from "../../ui-kit/logo/logo";
import atom from "../../assets/images/atom2.svg";

interface ConsumerProps {}

const Consumer = ({}: ConsumerProps) => {
  return (
    <>
      <MainSection>
        <Carrousel />
        <TitleContainer>
          <Title className="mobile dark">MY STREAMS</Title>
        </TitleContainer>
        <CardWrap>
          <Swipper />
        </CardWrap>
        <TitleContainer>
          <Title className="mobile dark">PREVIOUSLY VIEWED</Title>
        </TitleContainer>
        <CardWrap>
          <Swipper />
        </CardWrap>
        <TitleContainer>
          <Title className="mobile dark">FEATURED CREATORS</Title>
          <Link to={"/#"} className="link button">
            SEE ALL
          </Link>
        </TitleContainer>
        <CardWrap>
          {Array.from(Array(6)).map((v, i) => (
            <AlternativeCard
              key={i}
              className={"background-image text--white text--small"}
              name={"ASHLEY BENSON"}
              imgUrl={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg"
              }
              title={""}
              description={""}
              withButton={false}
              buttonText={""}
            />
          ))}
        </CardWrap>
        <TitleContainer>
          <Title className="mobile dark">FEATURED STREAMS</Title>
        </TitleContainer>
        <CardWrap>
          <Swipper />
        </CardWrap>
      </MainSection>
    </>
  );
};

export default Consumer;
