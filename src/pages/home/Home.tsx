import * as React from "react";
import Header from "../../components/Header/header";
import Carrousel from "../../components/Carousel/carousel";
import Logo from "../../ui-kit/logo/logo";
import FavIcon from "../../ui-kit/icons/favourite";
import AtomIcon from "../../ui-kit/icons/stream";
import {
  CardWrap,
  MainSection,
  Title,
  TitleContainer,
} from "../../styles/globalStyle";
import {Link} from "react-router-dom";
import Swipper from "../../components/Swipper/swipper";
import atom from "../../assets/images/atom2.svg";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <MainSection>
      <Carrousel />
      <TitleContainer>
        <Title className="mobile dark">MY STREAMS</Title>
      </TitleContainer>
      <CardWrap>
        <Swipper />
      </CardWrap>
    </MainSection>
  );
};

export default Home;
