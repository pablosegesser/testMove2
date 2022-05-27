
import * as React from "react";
import { CenterText, TitleHeader, SubtitleHeader, Button} from '../../styles/globalStyle'

interface HeaderImageProps {
    title: string;
    subtitle: string;
    buttonText: string;
}

const HeaderWithImage = ({ title, subtitle, buttonText}: HeaderImageProps) => {
    return (
      <CenterText>
     <TitleHeader>
          {title} 
     </TitleHeader>
         <SubtitleHeader>{subtitle}</SubtitleHeader> 
       <Button>
          {buttonText}
       </Button>
      </CenterText> 
    )
};

export default HeaderWithImage;
