import { CardTypes } from "../../Types/cardTypes";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
} from "./card.styles";

export const Card = ({ title, name, description, imgUrl }: CardTypes) => {
  return (
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>{name}</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {description}
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>     
  );
};
