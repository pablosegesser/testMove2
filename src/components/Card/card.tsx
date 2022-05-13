import { CardTypes } from "../../Types/cardTypes";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
} from "./card.styles";

export const Card = ({ title, name, description, imgUrl , className}: CardTypes) => {
  return (
      <CardWrapper className={className}>
        <CardImage background={imgUrl} />
        <CardTextWrapper className={className}>
          <CardTextDate>{name}</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {description}
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>     
  );
};
