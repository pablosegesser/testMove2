import * as React from "react";
import {CardWrap} from '../../styles/globalStyle'
import Header from '../../components/Header/header'
import {Card} from '../../components/Card/card'

interface SectionsProps {}

const Sections: React.FunctionComponent<SectionsProps> = () => {
    return (
        <>    
        <Header/>
        <CardWrap>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'}  description={ 'fashion worldest event'}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'}  description={ 'fashion worldest event'}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'}  description={ 'fashion worldest event'}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'}  description={ 'fashion worldest event'}/>
        </CardWrap>  
      <CardWrap>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'}  description={ 'fashion worldest event'}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'}  description={ 'fashion worldest event'}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'}  description={ 'fashion worldest event'}/>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'}  description={ 'fashion worldest event'}/>
        </CardWrap>
        </>
    )
  
};

export default Sections;
