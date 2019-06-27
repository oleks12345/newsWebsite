import React from 'react';
import { mount } from 'enzyme';
import { componentWithTheme } from '__tests_utilities__/utilities';
import Index from './Index';

describe( 'component <Index/>', () => {
   it( 'renders without crashing', () => {
      mount( componentWithTheme( <Index /> ) );
   } );
} );
