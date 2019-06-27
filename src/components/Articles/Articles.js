import React, { useEffect, useState } from 'react';
import {
   ArticlesSection,
   ArticlesWrapper,
   ArticlesLoading,
} from './Articles_styles';
import Spinner from './Spinner/Spinner';
import Article from './Article/Article';
import Search from '../Search/Search';

const Articles = () => {
   const [ articleList, setArticleList ] = useState( [] );
   const [ isLoaded, setIsLoaded ] = useState( false );
   const [ errorMessage, setErrorMessage ] = useState( '' );
   const [ query, setQuery ] = useState(
      new URL( document.location.href ).searchParams.get( 'q' )
   );

   useEffect( () => {
      const abortController = new AbortController();

      setIsLoaded( false );
      setErrorMessage( '' );
      setArticleList( [] );
      fetch( `https://oleks.pl/api/news/${query ? '?q=' + query : ''}`, {
         signal: abortController.signal,
      } )
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
            if ( articles.length === 0 ) {
               throw Error( 'noArticles' );
            }
            else {
               setArticleList( articles );
               setIsLoaded( true );
            }
         } )
         .catch( ( err ) => {
            switch ( err.message ) {
            case 'noArticles':
               setErrorMessage(
                  'No articles found, please try searching for something else.'
               );
               break;
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
   }, [ query ] );

   const mapArticles = () => {
      const articles = articleList.map( ( article ) => (
         <Article key={ article.title } data={ article }></Article>
      ) );

      return articles;
   };

   return (
      <ArticlesSection>
         <Search setQuery={ setQuery } query={ query } />
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
