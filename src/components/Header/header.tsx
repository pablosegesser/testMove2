/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { HeaderLayout} from './header.styles'
import React from "react";
import {Icons} from '../../styles/globalStyle'


interface HeaderProps {
  text?: string;
  logo?: any;
  icon?: any;
  icon2?: any;
  icon3?: any;
  className?: string;
}

const Header = ({ text, logo, icon, icon2, icon3, className }: HeaderProps) => {

  return (
    <>
      <HeaderLayout className={className}>
        <div>
           {logo} 
        </div>
     <div>
          {text}
     </div>
    <Icons>
          {icon}  
         {icon2}
         {icon3}
    </Icons>
        </HeaderLayout>
    </>
  )
}

export default Header
