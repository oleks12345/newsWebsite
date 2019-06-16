import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThemeProvider } from 'styled-components';

import { theme } from '../assets/styles/theme';

export const shallowWithTheme = ( tree ) => {
   return shallow( <ThemeProvider theme={ theme }>{ tree }</ThemeProvider> );
};

export const mountWithTheme = ( tree ) => {
   return mount( <ThemeProvider theme={ theme }>{ tree }</ThemeProvider> );
};
