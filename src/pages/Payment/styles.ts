import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   max-width: 58.75rem;
   padding: 2rem;
   margin: 0 auto;
`;

export const Inner = styled.main`
   background: ${({ theme }) => theme.colors.black};
   padding: 2rem 2.5rem;
   border-radius: 8px;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;

   h4 {
      margin: 2.5rem 0 2rem;

      &:first-child {
         margin-top: 0;
      }
   }

   .grouped {
      flex-grow: 1;
      display: flex;
      width: 100%;
      gap: 1rem;
   }

   .field {
      flex-grow: 1;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;

      .error {
         color: ${({ theme }) => theme.colors.red};
      }
   }

   label {
      display: block;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 0.5rem;
   }

   input,
   select {
      background: ${({ theme }) => theme.colors.gray800};
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid transparent;
      border-radius: 4px;
      transition: all 0.2s;
      height: 42px;
      width: 100%;
      margin: 0 0 1rem;
      padding: 0.7rem;

      &:focus {
         outline: 1px solid gray;
      }
   }

   input:-webkit-autofill:focus {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
      -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.gray800} inset;
      box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.gray800} inset;
      transition: background-color 5000s ease-in-out 0s;
   }

   input:-internal-autofill-selected {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
      -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.gray800} inset !important;
      box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.gray800} inset !important;
      outline: none;
      transition: background-color 5000s ease-in-out 0s;
   }

   input:-internal-autofill-selected:focus {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
      -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.gray800} inset !important;
      box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.gray800} inset !important;
      outline: 1px solid gray;
      caret-color: ${({ theme }) => theme.colors.white};
   }

   @media screen and (max-width: 540px) {
      .grouped {
         flex-direction: column;
      }
   }
`;
