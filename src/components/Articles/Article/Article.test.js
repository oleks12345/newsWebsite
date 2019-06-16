import React from 'react';
import 'jest-styled-components';

import Article from './Article';
import { mountWithTheme } from '../../../__tests_utilities__/utilities';
import { ArticleDate } from './Article_style';

describe( '<Article/>', () => {
   it( 'renders without image', () => {
      const article = mountWithTheme(
         <Article
            data={ {
               title: '',
               publishedAt: '',
               urlToImage: null,
               description: '',
            } }
         />
      );
      expect( article.find( 'img' ).prop( 'src' ) ).toContain( 'noImage.svg' );
   } );

   it( 'cuts description after 200 chars', () => {
      const article = mountWithTheme(
         <Article
            data={ {
               title: '',
               publishedAt: '',
               urlToImage: '',
               description:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vero hic iusto eveniet libero, laborum consequatur? Nemo unde sunt inventore provident quae ipsam dolore, repudiandae, tempore possimus porro, distinctio cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vero hic iusto eveniet libero, laborum consequatur? Nemo unde sunt inventore provident quae ipsam dolore, repudiandae, tempore possimus porro, distinctio cumque',
            } }
         />
      );

      const description = article.find( 'p' ).text();

      expect( description.length < 250 ).toEqual( true );
      expect( description.length >= 200 ).toEqual( true );
      expect( description.slice( description.length - 3 ) ).toEqual( '...' );
   } );

   it( 'works with wrong date', () => {
      const article = mountWithTheme(
         <Article
            data={ {
               title: '',
               publishedAt: '0000000000',
               urlToImage: '',
               description: '',
            } }
         />
      );

      const date = article.find( ArticleDate ).text();

      expect( date ).toEqual( '0000000000' );
   } );
} );
