import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/GlobalStyle';

const PageTemplate = ( { children } ) => {
   return (
      <ThemeProvider theme={ theme }>
         <>
            <GlobalStyle />
            { children }
         </>
      </ThemeProvider>
   );
};

PageTemplate.propTypes = {
   children: PropTypes.shape( [
      PropTypes.arrayOf( PropTypes.node ),
      PropTypes.node,
   ] ).isRequired,
};

export default PageTemplate;
