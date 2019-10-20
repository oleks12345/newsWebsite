import styled from 'styled-components';

export const SearchForm = styled.form`
   position: relative;

   ${( props ) => props.theme.mdq.md} {
      transform: none;
      transition: none;
   }
`;

export const SearchInput = styled.input`
   display: block;
   height: 35px;
   border: 1px solid ${( { theme } ) => theme.secondary};
   border-radius: 12px;
   padding: 5px;
`;

export const SearchButton = styled.button`
   position: absolute;
   right: 0px;
   top: 0;
   padding: 2px 5px;
   height: 100%;
   display: flex;
   align-items: center;
   background-color: transparent;
   border: none;
`;

export const SearchImg = styled.img`
   height: 100%;
`;
