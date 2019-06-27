import React from 'react';
import IconSearch from 'assets/images/iconSearch.svg';
import PropTypes from 'prop-types';
import {
   SearchForm,
   SearchInput,
   SearchButton,
   SearchImg,
} from './Search_styles';
import { useInput } from '../../utils/customHooks';

const Search = ( { query, setQuery } ) => {
   const searchInput = useInput( query );

   const formSubmit = ( e ) => {
      e.preventDefault();
      setQuery( searchInput.value );
   };

   return (
      <SearchForm action="/" onSubmit={ formSubmit }>
         <SearchInput { ...searchInput } name="q" />
         <SearchButton type="submit">
            <SearchImg src={ IconSearch } alt="" />{ ' ' }
         </SearchButton>
      </SearchForm>
   );
};

Search.propTypes = {
   query: PropTypes.string,
   setQuery: PropTypes.func.isRequired,
};
Search.defaultProps = {
   query: '',
};

export default Search;
