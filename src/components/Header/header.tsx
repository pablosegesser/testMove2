/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { HeaderLayout} from './header.styles'
import React from "react";


interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {

  return (
    <>
      <HeaderLayout>
       {text}
        </HeaderLayout>
    </>
  )
}

export default Header
