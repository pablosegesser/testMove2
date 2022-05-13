import { Button, ButtonContainer } from "../../styles/globalStyle";
import { CardTypes } from "../../Types/cardTypes";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
} from "./card.styles";

export const Card = ({ title, name, description, imgUrl , className, withAction}: CardTypes) => {
  return (
      <CardWrapper className={className}>
        <CardImage background={imgUrl} />
        <CardTextWrapper className={className}>
          <CardTextDate>{name}</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {description}
          </CardTextBody>
          {withAction ? <ButtonContainer>
           <Button type="button" className="secondary" onClick={()=>{}}>
              START
           </Button>
        </ButtonContainer>: null }
          </CardTextWrapper>
      </CardWrapper>     
  );
};
