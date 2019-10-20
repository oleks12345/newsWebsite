import React from 'react';
import PropTypes from 'prop-types';

import noImage from 'assets/images/noImage.svg';
import {
   StyledArticle,
   ArticleImage,
   ArticleLink,
   ArticleDate,
   StyledHr,
} from './Article_style';

const Article = ( { data } ) => {
   const cutDescriptionAtWhitespaceAfterNthLetter = (
      description,
      words = 200
   ) => {
      const reserve = words * 0.1;

      if ( description )
         if ( description.length > words + reserve ) {
            for ( let i = words; i < description.length; i++ ) {
               const currentChar = description[i];

               if (
                  currentChar === ' ' ||
                  currentChar === ',' ||
                  currentChar === '.'
               ) {
                  return description.slice( 0, i ) + '...';
               }
            }
         }

      return description;
   };

   const cutDateAtDays = ( date = '' ) => {
      if ( date ) {
         const tPosition = date.indexOf( 'T' );

         if ( tPosition > 1 ) {
            return date.slice( 0, tPosition );
         }
      }

      return date;
   };

   return (
      <StyledArticle>
         <ArticleLink href={ data.url }>
            <ArticleImage
               src={ data.urlToImage || noImage }
               alt="article image"
            />
            <h3>{ data.title }</h3>
            <StyledHr />
            <p>
               { cutDescriptionAtWhitespaceAfterNthLetter( data.description ) }
               <ArticleDate>{ cutDateAtDays( data.publishedAt ) }</ArticleDate>
            </p>
         </ArticleLink>
      </StyledArticle>
   );
};

Article.propTypes = {
   data: PropTypes.shape( {
      title: PropTypes.string,
      publishedAt: PropTypes.string,
      urlToImage: PropTypes.string,
      description: PropTypes.string,
   } ).isRequired,
};

export default Article;
