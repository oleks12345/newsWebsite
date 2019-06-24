import React, { useState, useEffect } from 'react';

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
import Hamburger from './Hamburger/Hamburger';

const NavBar = () => {
   const searchInput = useInput( '' );
   const [ isMenuOpen, setIsMenuOpen ] = useState( false );
   const handleMenuClick = () => setIsMenuOpen( !isMenuOpen );

   const handleKeyboard = ( e ) => {
      const code = e.keyCode;

      if ( code === 27 ) {
         setIsMenuOpen( false );
      }
   };

   useEffect( () => window.addEventListener( 'keydown', handleKeyboard ), [] );

   return (
      <StyledHeader>
         <HeaderBrand>News</HeaderBrand>
         <Hamburger onClick={ handleMenuClick } isOpen={ isMenuOpen } />
         <StyledNav isOpen={ isMenuOpen }>
            <NavSearch isOpen={ isMenuOpen }>
               <SearchInput { ...searchInput } name="q" />
               <SearchButton type="submit">
                  <SearchImg src={ IconSearch } alt="" />{ ' ' }
               </SearchButton>
            </NavSearch>
            <NavList isOpen={ isMenuOpen }>
               <NavItem>
                  <NavLink to="/">News</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to="/weather">Weather</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to="/two">Link3</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to="/three">Link4</NavLink>
               </NavItem>
            </NavList>
         </StyledNav>
      </StyledHeader>
   );
};

export default NavBar;
