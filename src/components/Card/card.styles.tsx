import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 260px;
  grid-template-rows: 360px 80px 40px;
  grid-template-areas: "image" "text" "stats";
  background: white;
  text-align: left;
`;

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-radius: 2px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin-top: 20px;
`;

export const CardTextDate = styled.span`
  color: #6667AB;
  font-size: 16px;
  font-family: Arial;
  font-weight: 700;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  font-weight: 700;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background:#000;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: Arial;

`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 20px;
  font-weight: 400;
  font-family: Times New Roman;
`;

