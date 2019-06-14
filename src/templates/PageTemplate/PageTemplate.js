import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/GlobalStyle';
import NavBar from '../../components/NavBar/NavBar';

const PageTemplate = ( { children } ) => {
   return (
      <ThemeProvider theme={ theme }>
         <>
            <GlobalStyle />
            <NavBar />
            { children }
            <div style={ { height: ' 150vh', background: '#eee' } }></div>
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
