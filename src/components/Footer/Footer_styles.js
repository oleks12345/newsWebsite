import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledFooter = styled.footer`
   background-color: ${( { theme } ) => theme.secondary};
   color: ${( { theme } ) => theme.white};
   font-size: ${( { theme } ) => theme.font.size.xs};
   display: flex;
   justify-content: center;
   ${( { theme } ) => theme.mdq.sm} {
      font-size: ${( { theme } ) => theme.font.size.s};
   }
`;

export const FooterWrapper = styled.div`
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
   padding: 0.5em 0;
   display: flex;
   align-items: center;
   justify-content: space-around;

   ${( { theme } ) => theme.mdq.md} {
      justify-content: space-between;
      padding: 0.5em 2em;
   }
`;
export const FooterLink = styled.a`
   color: ${( { theme } ) => lighten( 0.2, theme.link )};
`;
