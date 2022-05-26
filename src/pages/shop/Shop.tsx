import * as React from "react";
import Header from '../../components/Header/header'
import ArrowIcon from "../../ui-kit/icons/arrow";
import { Link } from "react-router-dom";
import { Cart } from "../../components/Cart/cart"
import Filter from '../../components/FilterBar/filter'
import { TitleContainer, Title , FilterContainer, FilterContent, Text, Wrap} from "../../styles/globalStyle";
import SearchIcon from "../../ui-kit/icons/search";
import TypeFilter from "../../components/FilterBar/typeFilter";
import AddIcon from "../../components/IconButton/addIcon";

interface ShopProps {}

const filterProducts= true;

const Shop: React.FunctionComponent<ShopProps> = () => {
    return (
        <>    
        <Header className="withIcon" text="ADD PRODUCTS" icon={"NEXT"}
        logo={ <Link to="/"><ArrowIcon/></Link>}/>
        <FilterContent>
             <Filter/>
             <Wrap><SearchIcon/><Text>FILTER</Text></Wrap> 
        </FilterContent>
           {filterProducts ? <><TitleContainer className="smallView">
                <Title className="small">Showing 12.330 Products</Title>
            </TitleContainer>
            <FilterContainer>
                   <Text>FILTER BY:</Text><TypeFilter/>
           </FilterContainer></> : null}
         {Array.from(Array(4)).map(() => (
        <Cart title={"REVOLVE"} price={'30.00'} imgUrl={'https://www.pruneshop.cl/media/catalog/product/cache/48a04200998cde1bd0724f004dc7dd57/P/I/PI02932CHAA1000_0_2.jpg'} description={'fashion worldest event'} className={"withIcon"} addIcon={<AddIcon/>} />
         ))} 
        </>
    )
};

export default Shop;
