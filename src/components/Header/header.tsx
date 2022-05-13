/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { HeaderLayout} from './header.styles'

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
