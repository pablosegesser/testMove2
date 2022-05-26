import styled from "styled-components";

export const CartWrapper = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 200px 300px;
    grid-template-rows: 200px;
    grid-template-areas: "image text";
    background: white;
    padding-left: 15px;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 15px;
    padding-top: 15px;
    text-align: left;

    &.withIcon{
      grid-template-columns: 200px 900px 100px;
      justify-content: center;
      @media (max-width: ${({ theme }) => theme.device.mobile}) {
        grid-template-columns: 120px 200px 100px;
        grid-template-rows: 111px;
        grid-template-areas: "image text";
        grid-gap: 0px;
        align-items:center;
      
    }
    } 


  &.black{
    background: black !important;

  } 

    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      grid-template-columns: 120px 200px;
      grid-template-rows: 111px;
      grid-template-areas: "image text";
      grid-gap: 0px;
    
  }

`;

export const CartImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-radius: 2px;
  background-size: cover;
 
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 100px;
    height: 100px;
}
`;

export const CartTextWrapper = styled.div`
  grid-area: text;
  margin-top: 20px;
  position: relative;
 
`;


export const CartTextTitle = styled.h2`
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
  
      @media (max-width: ${({ theme }) => theme.device.mobile}) {
        font-size: 10px;
      }


`;

export const CartTextBody = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: Arial;
  
@media (max-width: ${({ theme }) => theme.device.mobile}) {
  font-size: 12px;
}
  `
;

