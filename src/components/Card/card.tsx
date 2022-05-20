import { Button, ButtonContainer } from "../../styles/globalStyle";
import { CardTypes } from "../../Types/cardTypes";
import React from "react";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
} from "./card.styles";

export const Card = ({ title, name, description, imgUrl , className, withAction, buttonText}: CardTypes) => {
  return (
      <CardWrapper className={className}>
        <CardImage className={className} background={imgUrl} />
        <CardTextWrapper className={className}>
          <CardTextDate className={className}>{name}</CardTextDate>
          <CardTextTitle className={className}>{title}</CardTextTitle>
          <CardTextBody className={className}>
            {description}
          </CardTextBody>
          {withAction ? <ButtonContainer className="centerContain">
           <Button type="button" className="secondary" onClick={()=>{}}>
              {buttonText}
           </Button>
        </ButtonContainer>: null }
          </CardTextWrapper>
      </CardWrapper>     
  );
};
