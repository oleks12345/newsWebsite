import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, ErrorMessage } from './ErrorPage_styles';

const ErrorPage = () => {
   return (
      <Wrapper>
         <ErrorMessage> Page not found</ErrorMessage>
         <Link to="/">Go back to homepage</Link>
      </Wrapper>
   );
};

export default ErrorPage;
