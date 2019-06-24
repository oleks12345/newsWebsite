import styled from 'styled-components';

export const Wrapper = styled.section`
   margin-top: 70px;
   min-height: calc(100vh - 61px - 70px);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   ${( { theme } ) => theme.mdq.sm} {
      min-height: calc(100vh - 70px - 70px);
   }
`;

export const ErrorMessage = styled.h2`
   margin-top: 0;
`;
