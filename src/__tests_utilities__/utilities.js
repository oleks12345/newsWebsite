import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '../assets/styles/theme';

export const componentWithTheme = ( tree ) => {
   return <ThemeProvider theme={ theme }>{ tree }</ThemeProvider>;
};
