/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { HeaderLayout} from './header.styles'
import React from "react";
import {Icons, Avatar, CenterText, Button, TitleHeader, SubtitleHeader} from '../../styles/globalStyle'


interface HeaderProps {
  text?: string;
  logo?: any;
  icon?: any;
  icon2?: any;
  icon3?: any;
  title?:string;
  className?: string;
  img?: string;
  subtitle?: string;
  buttonText?: any;
}

const icons = true;
const user = false;
const headerImage = false;

const Header = ({ text, title, logo, icon, icon2, icon3, className, img, subtitle, buttonText}: HeaderProps) => {

  return (
    <>
      <HeaderLayout className={className} background={img}>
        <div>
           {logo} 
        </div>
        <div>
           {text} 
        </div>
   { headerImage ? <CenterText>
     <TitleHeader>
          {title} 
     </TitleHeader>
         <SubtitleHeader>{subtitle}</SubtitleHeader> 
       <Button>
          {buttonText}
       </Button>
      </CenterText> : null}
   {icons ? <Icons>
         {icon}  
         {icon2}
         {icon3}
    </Icons> : null} 
         { user ? <Avatar/> : null }
        </HeaderLayout>
    </>
  )
}

export default Header
