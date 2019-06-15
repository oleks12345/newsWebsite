import styled from 'styled-components';

export const StyledHeader = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
   margin: 0 auto;
   padding: 10px 10%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 70px;
   background-color: ${( { theme } ) => theme.white};
   z-index: 100;
   ${( props ) => props.theme.mdq.sm} {
      justify-content: space-around;
      padding: 10px;
   }
`;

export const HeaderBrand = styled.div`
   position: relative;
   font-size: ${( { theme } ) => theme.font.size.l};
   font-weight: ${( { theme } ) => theme.font.weight.bold};
   color: ${( { theme } ) => theme.secondary};
   text-align: center;
   background-color: ${( { theme } ) => theme.white};
   z-index: 100;
`;

export const StyledNav = styled.nav`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   position: fixed;
   top: 70px;
   left: 0;
   width: 100%;
   background-color: ${( { theme } ) => theme.white};
   transform-origin: center 0;
   opacity: ${( { isOpen } ) => ( isOpen ? 1 : 0 )};
   transform: translateX(${( { isOpen } ) => ( isOpen ? 0 : 100 )}%);
   transition: opacity 0.5s, transform 0s ${( { isOpen } ) => ( isOpen ? 0 : 0.5 )}s;
   z-index: -1;

   ${( props ) => props.theme.mdq.md} {
      width: auto;
      position: static;
      flex-direction: row;
      transform: none;
      transition: none;
      opacity: 1;
   }
`;

export const NavSearch = styled.form`
   position: relative;

   transform: translateX(${( { isOpen } ) => ( isOpen ? 0 : 100 )}%);
   transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

   ${( props ) => props.theme.mdq.md} {
      transform: none;
      transition: none;
   }
`;

export const SearchInput = styled.input`
   display: block;
   height: 35px;
   border: 1px solid ${( { theme } ) => theme.secondary};
   border-radius: 10px;
   padding: 5px;
`;

export const SearchButton = styled.button`
   position: absolute;
   right: 0px;
   top: 0;
   padding: 2px 5px;
   height: 100%;
   display: flex;
   align-items: center;
   background-color: transparent;
   border: none;
`;

export const SearchImg = styled.img`
   height: 100%;
`;

export const NavList = styled.ul`
   width: 100%;
   padding: 0;
   margin: 0 20px;
   list-style: none;
   display: flex;
   flex-direction: column;
   transform: translateX(${( { isOpen } ) => ( isOpen ? 0 : 100 )}%);
   transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
   ${( props ) => props.theme.mdq.md} {
      flex-direction: row;
      transform: none;

      transition: none;
   }
`;

export const NavItem = styled.li`
   text-align: center;
   padding: 10px 20px;
`;

export const NavLink = styled.a`
   width: 100%;
   height: 100%;
   text-decoration: none;
`;
