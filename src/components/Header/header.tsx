import { HeaderLayout} from './header.styles'
import React from "react";
import {Icons, Avatar} from '../../styles/globalStyle'


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
  headerWithImage?: any;
}

const icons = true;
const user = false;

const Header = ({ text, logo, icon, icon2, icon3, className, img, headerWithImage}: HeaderProps) => {

  return (
    <>
      <HeaderLayout className={className} background={img}>
        <div>
           {logo} 
        </div>
        <div>
           {text} 
        </div>
   {headerWithImage}
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
