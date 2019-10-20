import styled from 'styled-components';

export const StyledArticle = styled.article`
   width: 100%;
   max-width: 400px;
   padding: 20px;
   margin: 0 auto;
   ${( { theme } ) => theme.mdq.sm} {
      max-width: none;
      width: 50%;

      padding: 10px;
   }
   ${( { theme } ) => theme.mdq.md} {
      width: 33%;
   }
   ${( { theme } ) => theme.mdq.lg} {
      width: 25%;
   }
`;

export const ArticleLink = styled.a`
   display: block;
   height: 100%;
   text-decoration: none;
   color: inherit;
`;

export const StyledHr = styled.hr`
   margin-top: -10px;
   margin-bottom: -10px;
`;

export const ArticleImage = styled.img`
   width: 100%;
   display: block;
   object-fit: cover;
   height: 200px;
`;

export const ArticleDate = styled.span`
   text-align: right;
   font-style: italic;
   display: block;
`;
