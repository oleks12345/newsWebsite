import React, { useState, useEffect } from 'react';

import {
   StyledHeader,
   NavList,
   NavItem,
   NavLink,
   HeaderBrand,
   StyledNav,
} from './NavBar_styles';
import Hamburger from './Hamburger/Hamburger';

const NavBar = () => {
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
