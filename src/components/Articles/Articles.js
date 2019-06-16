import React, { useEffect, useState } from 'react';
import {
   ArticlesSection,
   ArticlesWrapper,
   ArticlesLoading,
} from './Articles_styles';
import Spinner from './Spinner/Spinner';
import Article from './Article/Article';

const Articles = () => {
   const [ articleList, setArticleList ] = useState( [] );
   const [ isLoaded, setIsLoaded ] = useState( true );
   const [ errorMessage, setErrorMessage ] = useState( '' );

   useEffect( () => {
      const abortController = new AbortController();

      fetch(
         `https://newsapi.org/v2/top-headlines?country=pl&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
         { signal: abortController.signal }
      )
         .then( ( res ) => res.json() )
         .then( ( data ) => {
            if ( data.status === 'ok' ) {
               return data.articles;
            }
            else {
               throw Error( data.code );
            }
         } )
         .then( ( articles ) => {
            setArticleList( articles );
            setIsLoaded( true );
         } )
         .catch( ( err ) => {
            switch ( err.message ) {
            case 'apiKeyMissing':
               setErrorMessage( 'Api key is missing' );
               break;
            case 'apiKeyExhausted':
               setErrorMessage( 'API key has no more requests available' );
               break;
            case 'apiKeyInvalid':
               setErrorMessage( 'Wrong api key' );
               break;
            case 'parameterInvalid':
            case 'parametersMissing':
               setErrorMessage( 'Problem with parameter' );
               break;
            case 'rateLimited':
               setErrorMessage( 'Too many request. Please Wait.' );
               break;
            case 'sourcesTooMany':
               setErrorMessage( 'Too many sources' );
               break;
            case 'sourceDoesNotExist':
               setErrorMessage( 'Source does ont exist' );
               break;
            default:
               setErrorMessage( 'Unknown error' );
            }
         } );

      return () => {
         abortController.abort();
      };
   }, [] );

   const mapArticles = () => {
      const articles = articleList.map( ( article ) => (
         <Article key={ article.title } data={ article }></Article>
      ) );

      return articles;
   };

   return (
      <ArticlesSection>
         { isLoaded ? (
            <ArticlesWrapper>{ mapArticles() }</ArticlesWrapper>
         ) : (
            <ArticlesLoading>
               { !errorMessage && <Spinner /> }
               <p> { errorMessage ? errorMessage : 'Loading' }</p>
            </ArticlesLoading>
         ) }
      </ArticlesSection>
   );
};

export default Articles;
