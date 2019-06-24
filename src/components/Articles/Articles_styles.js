import styled from 'styled-components';

export const ArticlesSection = styled.main`
   margin-top: 70px;
   padding-top: 25px;
   min-height: calc(100vh - 70px - 61px);
   ${( { theme } ) => theme.mdq.sm} {
      min-height: calc(100vh - 70px - 70px);
   }
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
