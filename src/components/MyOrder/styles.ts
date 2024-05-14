import { darken } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
   position: absolute;
   right: 1.5rem;
   bottom: 0.5rem;

   background-color: ${({ theme }) => theme.colors.red};
   padding: 0.5rem 1rem;
   border-radius: 0.5rem;

   display: flex;
   align-items: center;

   transition: background-color 0.3s;

   &:hover {
      background-color: ${darken(0.1, "#AA2424")};
   }

   span:first-child {
      margin-right: 0.25rem;
      font-weight: 500;
      font-size: 1rem;
   }

   svg {
      width: 2rem;
      height: 2rem;
      fill: ${({ theme }) => theme.colors.white};
   }

   span:last-child {
      margin-left: 0.75rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.yellow};
   }

   @media screen and (max-width: 768px) {
      bottom: initial;
      top: 0.5rem;

      span:first-child {
         display: none;
      }
   }
`;
