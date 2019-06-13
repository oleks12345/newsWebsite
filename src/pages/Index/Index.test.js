import React from 'react';
import { mount } from 'enzyme';
import Index from './Index';

it( 'renders without crashing', () => {
   mount( <Index /> );
} );
