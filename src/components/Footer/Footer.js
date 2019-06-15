import React from 'react';
import { StyledFooter, FooterWrapper } from './Footer_styles';

const Footer = () => {
   return (
      <StyledFooter>
         <FooterWrapper>
            <p>
               &copy; 2019 <a href="https://oleks.pl">oleks.pl</a>
            </p>
            <p>
               Powered by <a href="https://newsapi.org">NewsAPI.org</a>
            </p>
         </FooterWrapper>
      </StyledFooter>
   );
};

export default Footer;
