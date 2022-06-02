import {AvatarImg, HeaderLayout} from "./header.styles";
import React from "react";
import {Icons, Avatar} from "../../styles/globalStyle";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";

interface HeaderProps {
  text?: string;
  logo?: any;
  icon?: any;
  icon2?: any;
  icon3?: any;
  title?: string;
  className?: string;
  img?: string;
  subtitle?: string;
  buttonText?: any;
  headerWithImage?: any;
  avatar?: boolean;
}

const icons = true;

const Header = ({
  text,
  logo,
  icon,
  icon2,
  icon3,
  className,
  img,
  headerWithImage,
  avatar = true,
}: HeaderProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <HeaderLayout className={className} background={img}>
        <div>
          <Link to="/">{logo} </Link>
        </div>
        <div>{text}</div>
        {headerWithImage}
        <Icons>
          {icons ? (
            <>
              {icon}
              {icon2}
              {icon3}
            </>
          ) : null}
          {user && !className?.includes("withImage") && avatar ? (
            <Link to="/profile">
              <AvatarImg src={user.avatar} alt="Avatar" />
            </Link>
          ) : null}
        </Icons>
      </HeaderLayout>
    </>
  );
};

export default Header;
