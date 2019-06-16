import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-styled-components';

import { mount } from 'enzyme';
import Article from './Article';
import { componentWithTheme } from '../../../__tests_utilities__/utilities';
import { ArticleDate } from './Article_style';

describe( 'component <Article/>', () => {
   it( 'renders without crushing', () => {
      const div = document.createElement( 'div' );
      ReactDOM.render(
         componentWithTheme(
            <Article
               data={ {
                  title: '',
                  publishedAt: '',
                  urlToImage: '',
                  description: '',
               } }
            />
         ),
         div
      );
      ReactDOM.unmountComponentAtNode( div );
   } );
   it( 'renders with all data null ', () => {
      const div = document.createElement( 'div' );
      ReactDOM.render(
         componentWithTheme(
            <Article
               data={ {
                  title: null,
                  publishedAt: null,
                  urlToImage: null,
                  description: null,
               } }
            />
         ),
         div
      );
      ReactDOM.unmountComponentAtNode( div );
   } );

   it( 'renders without image', () => {
      const article = mount(
         componentWithTheme(
            <Article
               data={ {
                  title: '',
                  publishedAt: '',
                  urlToImage: null,
                  description: '',
               } }
            />
         )
      );
      expect( article.find( 'img' ).prop( 'src' ) ).toContain( 'noImage.svg' );
   } );

   it( 'cuts description after 200 chars', () => {
      const article = mount(
         componentWithTheme(
            <Article
               data={ {
                  title: '',
                  publishedAt: '',
                  urlToImage: '',
                  description:
                     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vero hic iusto eveniet libero, laborum consequatur? Nemo unde sunt inventore provident quae ipsam dolore, repudiandae, tempore possimus porro, distinctio cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vero hic iusto eveniet libero, laborum consequatur? Nemo unde sunt inventore provident quae ipsam dolore, repudiandae, tempore possimus porro, distinctio cumque',
               } }
            />
         )
      );

      const description = article.find( 'p' ).text();

      expect( description.length < 250 ).toEqual( true );
      expect( description.length >= 200 ).toEqual( true );
      expect( description.slice( description.length - 3 ) ).toEqual( '...' );
   } );

   it( 'works with wrong date', () => {
      const article = mount(
         componentWithTheme(
            <Article
               data={ {
                  title: '',
                  publishedAt: '0000000000',
                  urlToImage: '',
                  description: '',
               } }
            />
         )
      );

      const date = article.find( ArticleDate ).text();

      expect( date ).toEqual( '0000000000' );
   } );
} );
