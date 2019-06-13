import styled from 'styled-components';

export const StyledHeader = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
   margin: 0 auto;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 70px;
   background-color: ${( { theme } ) => theme.white};
   z-index: 100;
`;

export const HeaderBrand = styled.div`
   position: relative;
   font-size: ${( { theme } ) => theme.font.size.l};
   font-weight: ${( { theme } ) => theme.font.weight.bold};
   color: ${( { theme } ) => theme.secondary};
   flex-grow: 1;
   text-align: center;
   background-color: ${( { theme } ) => theme.white};
   z-index: 100;
`;

export const StyledNav = styled.nav`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   flex-grow: 2;
   position: absolute;
   top: 70px;
   background: #ddd;
   transform: translateY(0);
   transition: 1s;
   z-index: -1;
`;

export const NavSearch = styled.form`
   position: relative;
`;

export const SearchInput = styled.input`
   display: block;
   height: 35px;
   border: 1px solid ${( { theme } ) => theme.secondary};
   border-radius: 10px;
   padding: 5px;
`;

export const SearchButton = styled.form`
   position: absolute;
   right: 0px;
   top: 0;
   padding: 2px 5px;
   height: 100%;
   display: flex;
   align-items: center;
`;

export const SearchImg = styled.img`
   height: 100%;
`;

export const NavList = styled.ul`
   padding: 0;
   margin: 0;
   list-style: none;
   display: flex;
   flex-direction: column;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
   text-decoration: none;
`;
