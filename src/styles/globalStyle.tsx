import styled, {createGlobalStyle} from "styled-components";

interface GlobalStyleProps {
  bgColor: {
    main: string;
    header: string;
    button: string;
  };
  fontColor: {
    main: string;
    header: string;
    button: string;
    section: string;
  };
  color: {
    black: string;
    white: string;
  };
  fontSize: {
    biggest: string;
    big: string;
    large: string;
    medium: string;
    small: string;
    xsmall: string;
    xs: string;
  };
  fontType: {
    classic: string;
    modern: string;
    other: string;
  };
  fontBold: {
    bold: string;
    semiBold: string;
  };
  device: {
    mobile: string;
    tablet: string;
  };
}

export const lightTheme = {
  bgColor: {
    main: "#FFFFFF",
    header: "#000000",
    button: "#6667AB",
  },
  fontColor: {
    main: "#000000",
    header: "#FFFFFF",
    button: "#FFFFFF",
    section: "#4D4D4D",
  },
  color: {
    black: "#000",
    white: "#FFF",
  },
  fontSize: {
    biggest: "24px",
    big: "20px",
    large: "18px",
    medium: "16px",
    small: "14px",
    xsmall: "12px",
    xs: "10px",
  },
  fontType: {
    classic: "Arial",
    modern: "Times New Roman",
    other: "Avenir Next",
  },
  fontBold: {
    bold: "700",
    semiBold: "400",
  },
  device: {
    tablet: "900px",
    mobile: "425px",
  },
};

export const darkTheme = {
  bgColor: {
    main: "#000",
    header: "#000",
    button: "#6667AB",
  },
  fontColor: {
    main: "#FFFFFF",
    header: "#FFF",
    button: "#FFFFFF",
  },
  color: {
    black: "#000",
    white: "#FFF",
  },
  fontSize: {
    biggest: "24px",
    big: "20px",
    large: "18px",
    medium: "16px",
    small: "14px",
    xsmall: "12px",
    xs: "10px",
  },
  fontType: {
    classic: "Arial",
    modern: "Times New Roman",
    other: "Avenir Next",
  },
  fontBold: {
    bold: "700",
    semiBold: "400",
  },
  device: {
    tablet: "900px",
    mobile: "425px",
  },
};

export const GlobalStyle = createGlobalStyle<{theme: GlobalStyleProps}>`
`;

export const BodyContainer = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background-color: ${({theme}) => theme.bgColor.main};
  transition: all 0.5s ease;
  @media (min-width: ${({theme}) => theme.device.tablet}) {
    padding: 0;
  }
`;
export const Alignment = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`;

export const IconContent = styled.div`
  border-right: 1px solid #e5e5e5;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const FilterContent = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  justify-content: space-between;
  padding: 10px 15px 15px 15px;
`;

export const Avatar = styled.div`
  width: 38px;
  height: 38px;
  margin-top: 49px;
  border-radius: 20px;
  background-color: red;
  background-size: cover;

  @media (max-width: ${({theme}) => theme.device.mobile}) {
    width: 32px;
    height: 32px;
    margin-top: 49px;
    border-radius: 20px;
  }
`;
export const ContentIcon = styled.div`
  width: 28px;
  height: 28px;
  left: 331px;
  top: 247px;
  border-radius: 50%;
  background-color: #6667ab;
  align-items: center;
  justify-content: center;
  display: flex;

  &.checked {
    background-color: #eeeeff;
  }
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    width: 24px;
    height: 24px;
    left: 331px;
    top: 247px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextLine = styled.div`
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    font-size: 14px;
    width: 100px;
  }
`;
export const Text = styled.div`
  font-family: Arial;
  font-weight: 700;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    font-size: 10px;
  }
`;
export const TitleHeader = styled.div`
  font-size: 34px;
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    font-size: 24px;
  }
`;

export const UploadText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    font-size: 14px;
  }
`;
export const SubtitleHeader = styled.div`
  font-size: 22px;
  padding-bottom: 50px;
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    font-size: 16px;
    padding-bottom: 26px;
  }
`;
export const DesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  @media (min-width: ${({theme}) => theme.device.tablet}) {
    padding-left: 221px;
  }
  &.loginPage {
    padding: 0;
  }
`;

export const FilterContainer = styled.div`
  color: #999999;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;

  @media (max-width: ${({theme}) => theme.device.mobile}) {
    padding-left: 15px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainSection = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.color.black};
`;
export const Section = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.color.black};
`;

export const PageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: ${({theme}) => theme.device.tablet}) {
    position: fixed;
    padding: 0 2rem;
    padding-bottom: 20rem;
    overflow: scroll;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 60px;

  .button {
    color: white;
  }

  @media (max-width: ${({theme}) => theme.device.mobile}) {
    padding-left: 15px;
    padding-right: 15px;
  }
  &.smallView {
    margin-top: 0;
    @media (max-width: ${({theme}) => theme.device.mobile}) {
      margin-top: 1rem;
      padding-top: 0 !important;
    }
  }
`;

export const ButtonsContain = styled.div`
  width: 100%;
  display: flex;
  height: 130px;
  margin-top: 2.5rem;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  font-weight: 700;
  line-height: 20px;
  font-size: 1.5rem;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${({theme}) => theme.device.tablet}) {
    padding-left: 4px;
  }
`;

export const CenterText = styled.div`
  width: 100%;
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
  line-height: 2rem;

  @media (max-width: ${({theme}) => theme.device.tablet}) {
  }
`;
export const ImageContainer = styled.div`
  width: 324px;
  text-align: center;
  padding-bottom: 52px;
  border-bottom: 1px solid #fafafa;
  @media (min-width: ${({theme}) => theme.device.tablet}) {
    padding-bottom: 42px;
  }
`;

export const RowContainer = styled.div`
  width: 100%;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 0 48px 0 38px;
  &.columnsName {
    border-top: 1px solid #c4c4c4;
    min-height: 65px;
  }
  &.item:hover {
    background: #e5e5e5;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    &:last-child {
      width: min-content;
    }
    &.hidden {
      visibility: hidden;
    }
  }

  @media (max-width: ${({theme}) => theme.device.tablet}) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #c4c4c4;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding-top: 1rem;
`;

export const CardWrap = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: #0000;
`;

export const Title = styled.h3`
  margin: 0;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 2rem;
  line-height: 20.7px;
  letter-spacing: -0.015em;
  display: flex;
  align-items: center;

  @media (max-width: ${({theme}) => theme.device.tablet}) {
    margin: none !important;
  }

  &.dark {
   color: white;
  }

  &.item-font {
    font-size: 14px;
    align-self: flex-start;
  }

  &.small {
    @media (max-width: ${({theme}) => theme.device.tablet}) {
      font-size: 14px;
      align-self: flex-start;
      margin-left: 0 !important;
    }

  }
  &.mobile {
    @media (max-width: ${({theme}) => theme.device.tablet}) {
      margin-left: 0;
      font-size: 18px;

    }
   }

  }
`;

export const Subtitle = styled.h6`
  margin: 0;
  font-family: "Arial";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 22px;
  letter-spacing: -0.015em;
  color: ${({theme}) => theme.color.grey};

  &.mobile {
    margin-top: 11px;
    margin-bottom: 1.2rem;
    @media (min-width: ${({theme}) => theme.device.tablet}) {
      display: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  &.with-icon {
    margin-top: 23px;
  }

  &.centerContain {
    align-items: center;
  }

  &.xs {
    @media (max-width: ${({theme}) => theme.device.mobile}) {
      align-items: start;
    }
  }
  &.desktop {
    @media (min-width: ${({theme}) => theme.device.tablet}) {
      display: flex;
      margin-bottom: 2rem;
    }
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 36px;
  padding: 0;
  justify-self: center;
  border-radius: 20px;
  border: 2px solid ${({theme}) => theme.bgColor.button};
  background-color: ${({theme}) => theme.bgColor.button};
  color: ${({theme}) => theme.fontColor.button};
  box-sizing: border-box;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16.1px;
  letter-spacing: -0.015em;
  cursor: pointer;

  &:disabled {
    border: 2px solid ${({theme}) => theme.color.grey};
    background-color: ${({theme}) => theme.color.grey};
    color: ${({theme}) => theme.color.white};
  }

  &.full-width {
    @media (max-width: ${({theme}) => theme.device.mobile}) {
      width: -webkit-fill-available;
    }
  }

  &.without-border {
    border: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.white};
    color: ${({theme}) => theme.fontColor.opposite};
  }

  &.greyButton {
    width: 90px;
    height: 40px;
    font-size: 16px;
    margin-left: 10px;
    font-family: Arial;
    border: none !important;
    color: black;
    left: 163px;
    top: 169px;
    background-color: #fafafa;
    border-radius: 5px;
    @media (max-width: ${({theme}) => theme.device.mobile}) {
      width: 80px;
      height: 30px;
      font-size: 12px;
    }
  }

  &.secondary {
    background-color: ${({theme}) => theme.bgColor.opposite};
    color: ${({theme}) => theme.fontColor.opposite};
    margin-bottom: 13px;

    &:disabled {
      border: 2px solid ${({theme}) => theme.color.grey};
      background-color: ${({theme}) => theme.color.white};
      color: ${({theme}) => theme.color.grey};
    }
  }

  &.small-desktop {
    width: 76px;
    height: 32px;
    font-size: 11px;
    line-height: 23px;
    margin-bottom: 0;

    svg {
      vertical-align: middle;
      margin-right: 3px;
    }
  }

  &.medium-desktop {
    width: 110px;
    height: 32px;
    font-size: 11px;
    line-height: 23px;
    margin-bottom: 0;

    svg {
      vertical-align: middle;
      margin-right: 3px;
    }
  }

  &.small-bottom-gap {
    margin-bottom: 1.5rem;
  }

  &.add-button {
    height: 36px;
  }

  &.with-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    svg {
      margin-bottom: 4px !important;
      margin-right: 10px !important;
    }
  }

  @media (max-width: ${({theme}) => theme.device.mobile}) {
    width: 108px;
    height: 36px;
    font-size: 14px;
    line-height: 16.1px;
    margin-bottom: 0;
  }

  &.tiny {
    @media (max-width: ${({theme}) => theme.device.mobile}) {
      width: 161px;
      height: 36px;
      font-size: 14px;
      line-height: 16.1px;
      margin-bottom: 0;
    }
  }

  &.border-off {
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.color.white};

    @media (max-width: ${({theme}) => theme.device.mobile}) {
      width: 161px;
      height: 36px;
      font-size: 14px;
      line-height: 16.1px;
      margin-bottom: 0;
    }
  }
`;

export const ImageButton = styled.button`
  padding: 0;
  width: 50px;
  height: 50px;
  left: 199px;
  top: 354px;
  background: #ffffff;
  box-shadow: 1px 2px 15px rgba(102, 103, 171, 0.2);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    color: ${({theme}) => theme.color.grey};
  }

  &.arrow {
    width: 1.2rem;
    margin-left: 0.8rem;
  }

  &.logo {
    width: 100%;
    @media (max-width: ${({theme}) => theme.device.tablet}) {
      width: fit-content;
    }
  }

  &.search-button {
    width: 2.5rem;
    height: 2rem;
    position: absolute;
    left: 318px;
    align-items: center;
    @media (max-width: ${({theme}) => theme.device.tablet}) {
      height: 2.5rem;
      left: 36px;
    }
  }

  &.list-page {
    left: 44px;
    @media (max-width: ${({theme}) => theme.device.tablet}) {
      left: 36px;
    }
  }

  &.return-button {
    width: 2rem;
    padding: 28px 0;
    justify-content: flex-start;
  }

  &.close-button {
    width: 2rem;
    padding: 28px 0;
    justify-content: flex-end;
    @media (max-width: ${({theme}) => theme.device.tablet}) {
      display: none;
    }
  }

  &.disabled {
    cursor: default;
  }

  &.desktop {
    @media (max-width: ${({theme}) => theme.device.tablet}) {
      display: none;
    }
  }

  &.mobile {
    @media (min-width: ${({theme}) => theme.device.tablet}) {
      display: none;
    }
  }
`;
