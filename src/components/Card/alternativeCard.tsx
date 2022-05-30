import React from "react";
// styles
import { CardTypes } from "../../Types/cardTypes";
import {
	AlternativeCardWrapper,
	CardTextTitle,
	CardTextWrapper,
} from "./alternativeCard.styles";

export const AlternativeCard = ({ name, imgUrl, className }: CardTypes) => {
	return (
		<AlternativeCardWrapper className={className} background={imgUrl}>
			<CardTextWrapper className={className}>
				<CardTextTitle className={className}>
					{name}
				</CardTextTitle>
			</CardTextWrapper>
		</AlternativeCardWrapper>
	);
};
