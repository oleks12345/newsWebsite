import styled from 'styled-components';

export const ArticlesSection = styled.main`
   padding-top: 70px;
`;

export const ArticlesWrapper = styled.div`
   max-width: ${( { theme } ) => theme.maxWidth};
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

export const Article = styled.article`
   width: 100%;
   ${( { theme } ) => theme.mdq.sm} {
      width: 50%;
   }
   ${( { theme } ) => theme.mdq.md} {
      width: 33%;
   }
   ${( { theme } ) => theme.mdq.lg} {
      width: 25%;
   }
`;
