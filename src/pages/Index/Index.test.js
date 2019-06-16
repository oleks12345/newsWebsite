import React from 'react';
import { mount } from 'enzyme';
import Index from './Index';

describe( 'component <Index/>', () => {
   it( 'renders without crashing', () => {
      mount( <Index /> );
   } );
} );
