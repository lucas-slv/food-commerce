import styled from "styled-components";

export const Container = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin-bottom: 2rem;

   img {
      width: 8rem;
   }

   > div {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      div {
         display: flex;
         flex-direction: column;
         justify-content: center;
         text-align: right;

         gap: 0.5rem;

         h3 {
            margin-bottom: 0.125rem;
            font-size: 1.3rem;
            font-weight: 500;
         }

         span {
            color: ${({ theme }) => theme.colors.yellow};
            font-size: 1.25rem;
            font-weight: 500;
         }
      }

      svg {
         fill: ${({ theme }) => theme.colors.white};
         flex-shrink: 0;
         height: 3rem;
         width: 3rem;
      }
   }
`;
