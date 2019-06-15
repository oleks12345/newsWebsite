import styled from 'styled-components';

export const StyledFooter = styled.footer`
   background-color: ${( { theme } ) => theme.secondary};
   color: ${( { theme } ) => theme.white};
   font-size: ${( { theme } ) => theme.font.size.s};
   display: flex;
   justify-content: center;
`;

export const FooterWrapper = styled.div`
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
   display: flex;
   align-items: space-around;
   justify-content: space-around;
`;
