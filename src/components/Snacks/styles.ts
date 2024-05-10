import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, auto));
   gap: 1.75rem;

   @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
   }

   .snack {
      position: relative;
      background-color: ${({ theme }) => theme.colors.black};

      padding: 1.75rem 1.5rem;
      border-radius: 4px;

      span {
         position: absolute;
         left: -0.5rem;
         top: -0.5rem;

         background-color: ${({ theme }) => theme.colors.red};
         width: 2rem;
         height: 2rem;
         border-radius: 50%;

         display: flex;
         align-items: center;
         justify-content: center;

         font-weight: 500;
         font-size: 1.125rem;
      }

      h2 {
         margin-bottom: 0.75rem;
         font-weight: 700;
         font-size: 1.5rem;
         text-align: center;
      }

      img {
         object-fit: cover;
         width: 100%;
         height: 11.25rem;
         border-radius: 4px;
         margin-bottom: 0.375rem;
      }

      p {
         font-size: 0.875rem;
      }

      div {
         margin-top: 0.875rem;

         display: flex;
         align-items: center;
         justify-content: space-between;

         strong {
            font-size: 2rem;
            font-weight: 500;
         }

         button {
            background-color: ${({ theme }) => theme.colors.red};
            border: none;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: background-color 0.2s;

            &:hover {
               background-color: ${darken(0.1, "#AA2424")};
            }
         }
      }
   }
`;
