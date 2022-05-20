import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 260px;
  grid-template-rows: 360px 80px;
  grid-template-areas: "image" "text" ;
  background: white;
  padding-left:15px;
  padding-bottom:40px;
  text-align: left;
 
  &.horizontal {
    grid-template-columns: 320px 320px 320px;
    grid-gap: 15px;
    text-align: center;
    grid-template-rows: 500px 0;
    grid-template-areas:
    "image text text"
   
  }
  &.bigger {
    grid-template-columns: 1800px;
    text-align: center;
    padding-left:0;
    background: black;
    grid-template-rows: 800px;
    grid-template-areas:
    "image text"
  }
  &.black{
    background: black !important;

  }
  &.mobile {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      grid-template-columns: 390px;
      padding-left:0;
      background: black;
      grid-template-rows: 800px;
      grid-template-areas:
      "image text"
    }
    }
    &.tiny {
      @media (max-width: ${({ theme }) => theme.device.mobile}) {
  
      grid-template-columns: 170px 200px;
      text-align: center;
      grid-template-rows: 280px 0;
      text-align: left;
      grid-template-areas: "image text";
      
    }
  }
  &.break{
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
    height: 203px;
    margin-bottom: 20vh;
    padding-left: 0;
    grid-template-rows: 200px 80px;
    grid-template-columns: none;
    
  }

`;

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-radius: 2px;
  background-size: cover;
 
  &.break{
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 140px;
    height: 210px;
  }
}
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin-top: 20px;
  position: relative;

  &.centered {
  justify-self: center;
  align-self: center;
  }
 
  &.absolute {
    justify-self: center;
    align-self: center;
    align-items: center;
    justify-content: center;
    position: absolute;
}
&.small {
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 16px;
  }
}
  &.top {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      font-size: 16px;
      margin-top: 40px;

    }
}
&.bottom {
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding-bottom: 90px;
    align-self: end;
  }
}

`;

export const CardTextDate = styled.span`
  color: #6667AB;
  font-size: 16px;
  font-family: Arial;
  font-weight: 700;

  &.small {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      font-size: 10px;
    }
  }
  &.breakpoint {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      font-size: 20px;
    }
}
&.medium {
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 12px;
  }
}

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
  
  &.white {
    color:white !important;
   }
   
   &.small {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      font-size: 16px;
    }
  }
    &.mobile {
      @media (max-width: ${({ theme }) => theme.device.mobile}) {
        font-size: 20px;
      }
  }
  &.medium {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      font-size: 16px;
    }
  }

`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 20px;
  font-weight: 400;
  font-family: Times New Roman;
  
  &.light {
    color:white !important;
   }

   &.small {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      font-size: 16px;
    }
  }
  &.mobile {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      font-size: 20px;
      width:340px;
    }
}
&.medium {
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 16px;
  }
}
  `
;

