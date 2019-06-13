import React from 'react';

import IconSearch from 'assets/images/iconSearch.svg';
import {
   StyledHeader,
   NavList,
   NavItem,
   NavLink,
   HeaderBrand,
   SearchInput,
   StyledNav,
   NavSearch,
   SearchButton,
   SearchImg,
} from './NavBar_styles';
import { useInput } from '../../utils/customHooks';

const NavBar = () => {
   const searchInput = useInput( '' );

   return (
      <StyledHeader>
         <HeaderBrand>News</HeaderBrand>
         <StyledNav>
            <NavSearch>
               <SearchInput { ...searchInput }></SearchInput>
               <SearchButton>
                  { ' ' }
                  <SearchImg src={ IconSearch } alt="" />{ ' ' }
               </SearchButton>
            </NavSearch>
            <NavList>
               <NavItem>
                  <NavLink href="#home">Link</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#home">Link2</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#home">Link3</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href="#home">Link4</NavLink>
               </NavItem>
            </NavList>
         </StyledNav>
      </StyledHeader>
   );
};

export default NavBar;
