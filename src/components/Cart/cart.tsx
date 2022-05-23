import { CartTypes } from "../../Types/cartTypes";
import React from "react";
import {
  CartWrapper,
  CartImage,
  CartTextWrapper,
  CartTextTitle,
  CartTextBody,
} from "./cart.styles";

export const Cart = ({ title,description, price, imgUrl , className }: CartTypes) => {
  return (
      <CartWrapper className={className}>
        <CartImage className={className} background={imgUrl} />
        <CartTextWrapper className={className}>
          <CartTextTitle className={className}>{title}</CartTextTitle>
          <CartTextBody className={className}>
            {description}
          </CartTextBody>
          <CartTextTitle className={className}>{price}</CartTextTitle>
          </CartTextWrapper>
      </CartWrapper>     
  );
};
