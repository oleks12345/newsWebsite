import React from 'react';
import { StyledFooter, FooterWrapper, FooterLink } from './Footer_styles';

const Footer = () => {
   return (
      <StyledFooter>
         <FooterWrapper>
            <p>
               &copy; 2019{ ' ' }
               <FooterLink href="https://oleks.pl">oleks.pl</FooterLink>
            </p>
            <p>
               Powered by{ ' ' }
               <FooterLink href="https://newsapi.org">NewsAPI.org</FooterLink>
            </p>
         </FooterWrapper>
      </StyledFooter>
   );
};

export default Footer;
