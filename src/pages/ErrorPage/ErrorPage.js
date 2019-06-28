import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, ErrorMessage } from './ErrorPage_styles';

const ErrorPage = () => {
   return (
      <Wrapper>
         <ErrorMessage> Page not found</ErrorMessage>
         <p>website is still work in progress</p>
         <Link to="/">Go back to homepage</Link>
      </Wrapper>
   );
};

export default ErrorPage;
