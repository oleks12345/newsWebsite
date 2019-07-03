import React from 'react';
import IconSearch from 'assets/images/iconSearch.svg';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
   SearchForm,
   SearchInput,
   SearchButton,
   SearchImg,
} from './Search_styles';
import { useInput } from '../../utils/customHooks';

const Search = ( { query, setQuery, history } ) => {
   const searchInput = useInput( query );

   const formSubmit = ( e ) => {
      e.preventDefault();
      history.push( { search: `?q=${searchInput.value}` } );

      setQuery( searchInput.value );
   };

   return (
      <SearchForm action="/" onSubmit={ formSubmit }>
         <SearchInput { ...searchInput } name="q" />
         <SearchButton type="submit">
            <SearchImg src={ IconSearch } alt="submit" />{ ' ' }
         </SearchButton>
      </SearchForm>
   );
};

Search.propTypes = {
   query: PropTypes.string,
   setQuery: PropTypes.func.isRequired,
   history: PropTypes.shape().isRequired,
};
Search.defaultProps = {
   query: '',
};

export default withRouter( Search );
