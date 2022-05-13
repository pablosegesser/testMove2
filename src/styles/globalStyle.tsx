import styled, { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps {
  bgColor: {
    main: string
    header: string
    button: string
  }
  fontColor: {
    main: string
    header: string
    button: string
    section: string
  }
  color: {
    black: string
    white: string
  }
  fontSize: {
    biggest: string,
    big: string,
    large: string,
    medium: string,
    small: string,
    xsmall: string,
    xs: string,
  }
  fontType: {
    classic: string,
    modern: string,
    other: string,
  },
  fontBold: {
    bold: string
    semiBold: string
  },
  device: {
    mobile: string
    tablet: string
  }
}

export const lightTheme = {
  bgColor: {
    main: '#FFFFFF',
    header: '#000000',
    button: '#6667AB',
  },
  fontColor: {
    main: '#000000',
    header: '#FFFFFF',
    button: '#FFFFFF',
    section: '#4D4D4D',
  },
  color: {
    black: '#000',
    white: '#FFF',
  },
  fontSize: {
    biggest:'24px',
    big: '20px',
    large: '18px',
    medium: '16px',
    small: '14px',
    xsmall: '12px',
    xs: '10px',
  },
  fontType: {
    classic: 'Arial',
    modern: 'Times New Roman',
    other: 'Avenir Next',
  },
  fontBold: {
    bold: '700',
    semiBold: '400'
  },
  device: {
    tablet: '900px',
    mobile: '425px',
  }
}

export const darkTheme = {
    bgColor: {
      main: '#000000',
      header: '#000000',
      button: '#6667AB',
    },
    fontColor: {
      main: '#FFFFFF',
      header: '#FFF',
      button: '#FFFFFF',
    },
    color: {
      black: '#000',
      white: '#FFF',
    },
    fontSize: {
      biggest:'24px',
      big: '20px',
      large: '18px',
      medium: '16px',
      small: '14px',
      xsmall: '12px',
      xs: '10px'
    },
    fontType: {
      classic: 'Arial',
      modern: 'Times New Roman',
      other: 'Avenir Next',
    },
    fontBold: {
      bold: '700',
      semiBold: '400'
    },
    device: {
      tablet: '900px',
      mobile: '425px',
    }
  }


export const GlobalStyle = createGlobalStyle<{ theme: GlobalStyleProps }>`
`

export const BodyContainer = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.bgColor.main};
  transition: all 0.5s ease;
  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 0;
  }
`

export const DesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    padding-left: 221px;
  }
  &.loginPage {
    padding: 0;
  }
`

export const MainSection = styled.main`
  width: 100%;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.bgBlack {
    background-color: ${({ theme }) => theme.color.black};
  }
  &.mobile {
    @media (min-width: ${({ theme }) => theme.device.tablet}) {
      display: none;
    }
  }
  &.desktop {
    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      display: none;
    }
  }
`

export const PageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

    div.button-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }
  }

  &.list-page {
    overflow: overlay;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    position: fixed;
    top: 290px;
    padding: 0 2rem;
    padding-bottom: 20rem;
    overflow: scroll;

  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 82px;
  margin-top: 2.5rem;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-left: 4px;

  }
`

export const ImageContainer = styled.div`
  width: 324px;
  text-align: center;
  padding-bottom: 52px;
  border-bottom: 1px solid #fafafa;
  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    padding-bottom: 42px;
  }
`

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

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
`

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
  `
  export const CardWrap = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #0000;
  overflow: hidden;
`;

export const Title = styled.h3`
  margin: 0;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 20.7px;
  letter-spacing: -0.015em;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    margin: none !important;
  }

  &.item-font {
    font-size: 14px;
    align-self: flex-start;
  }

  }
`

export const Subtitle = styled.h6`
  margin: 0;
  font-family: 'Arial';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 22px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.color.grey};

  &.mobile {
    margin-top: 11px;
    margin-bottom: 1.2rem;
    @media (min-width: ${({ theme }) => theme.device.tablet}) {
      display: none;
    }
  }
`

export const Paragraph = styled.p`
  margin: 0;
  font-family: 'Sofia-Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.color.grey};
  display: flex;
  align-items: center;
  &.desktop-font {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    margin: auto;
  }

  &.pagination {
    color: ${({ theme }) => theme.color.black};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  &.with-icon {
    margin-top: 23px;
  }

  &.desktop {
    @media (min-width: ${({ theme }) => theme.device.tablet}) {
      display: flex;
      margin-bottom: 2rem;
    }
  }

`

export const Button = styled.button`
  width: 240px;
  height: 36px;
  padding: 0;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.bgColor.button};
  background-color: ${({ theme }) => theme.bgColor.button};
  color: ${({ theme }) => theme.fontColor.button};
  box-sizing: border-box;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.1px;
  letter-spacing: -0.015em;
  cursor: pointer;

  &:disabled {
    border: 2px solid ${({ theme }) => theme.color.grey};
    background-color: ${({ theme }) => theme.color.grey};
    color: ${({ theme }) => theme.color.white};
  }

  &.without-border {
    border: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.fontColor.opposite};
  }

  &.secondary {
    background-color: ${({ theme }) => theme.bgColor.opposite};
    color: ${({ theme }) => theme.fontColor.opposite};
    margin-bottom: 13px;

    &:disabled {
      border: 2px solid ${({ theme }) => theme.color.grey};
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.grey};
    }
  }

  &.small-mobile {
    width: 74px;
    height: 28px;
    font-size: 10px;
    line-height: 22px;
    margin: 0;
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

  @media (min-width: ${({ theme }) => theme.device.mobile}) {
    &.login {
      max-width: 328px;
    }

    &.medium {
      width: 195px;
      align-self: center;
      margin: 38px 0;
    }

    &.desktop {
      height: 55px;
    }
  }
`

export const ImageButton = styled.button`
  width: 1rem;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.color.grey};
  }

  &.arrow {
    width: 1.2rem;
    margin-left: 0.8rem;
  }

  &.logo {
    width: 100%;
    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      width: fit-content;
    }
  }

  &.search-button {
    width: 2.5rem;
    height: 2rem;
    position: absolute;
    left: 318px;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      height: 2.5rem;
      left: 36px;
    }
  }

  &.list-page {
    left: 44px;
    @media (max-width: ${({ theme }) => theme.device.tablet}) {
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
    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      display: none;
    }
  }

  &.disabled {
    cursor: default;
  }

  &.desktop {
    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      display: none;
    }
  }

  &.mobile {
    @media (min-width: ${({ theme }) => theme.device.tablet}) {
      display: none;
    }
  }
`

