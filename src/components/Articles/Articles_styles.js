import styled from 'styled-components';

export const ArticlesSection = styled.main`
   padding-top: 70px;
   min-height: 100vh;
`;

export const ArticlesWrapper = styled.div`
   max-width: ${( { theme } ) => theme.maxWidth};
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

export const ArticlesLoading = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding: 10%;
   align-items: center;
`;
