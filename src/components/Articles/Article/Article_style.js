import styled from 'styled-components';

export const StyledArticle = styled.article`
   width: 100%;
   padding: 0 20px;
   ${( { theme } ) => theme.mdq.xs} {
      width: 50%;
      padding: 0 10px;
   }
   ${( { theme } ) => theme.mdq.md} {
      width: 33%;
   }
   ${( { theme } ) => theme.mdq.lg} {
      width: 25%;
   }
`;

export const ArticleLink = styled.a`
   text-decoration: none;
   color: inherit;
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