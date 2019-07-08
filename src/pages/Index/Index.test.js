import React from 'react';
import { mount } from 'enzyme';
import { componentWithTheme } from '__tests_utilities__/utilities';
import { StaticRouter as Router } from 'react-router-dom';
import Index from './Index';

describe( 'component <Index/>', () => {
   it( 'renders without crashing', () => {
      mount(
         componentWithTheme(
            <Router>
               <Index />
            </Router>
         )
      );
   } );
} );
