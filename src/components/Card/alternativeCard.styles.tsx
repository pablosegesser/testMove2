import styled from "styled-components";

export const AlternativeCardWrapper = styled.div`
	position: relative;
	max-width: 185px;
	padding: 24px 26px;
	border-radius: 3px;
	border: 1px solid transparent;
	margin: 0 15px 15px 15px;
	font-family: Arial;

	@media (max-width: ${({ theme }) => theme.device.mobile}) {
		margin: 0 0 15px 0;
	}

	&.background-image {
		background-image: url(${({ background }) => background});
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: #fff;
	}
`;

export const CardTextWrapper = styled.div`
	text-align: center;
	transform: translate(0, 40%);
	@media (max-width: ${({ theme }) => theme.device.mobile}) {
		transform: translate(0, 70%);
	}
`;

export const CardTextTitle = styled.h2`
	margin-bottom: 0;

	&.text--white {
		color: white;
	}
	&.text--small {
		@media (max-width: ${({ theme }) => theme.device.mobile}) {
			font-size: 14px;
		}
	}
	&.mobile {
		@media (max-width: ${({ theme }) => theme.device.mobile}) {}
	}
	&.medium {
		@media (max-width: ${({ theme }) => theme.device.mobile}) {}
	}
`;
