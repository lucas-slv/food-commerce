import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;

   .orderItem {
      background-color: ${({ theme }) => theme.colors.black};

      padding: 1.75rem 1.5rem;
      border-radius: 4px;

      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 1.5rem;

      > div:first-child {
         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 4px;
         }
      }

      > div:last-child {
         display: flex;
         flex-direction: column;
         justify-content: space-between;

         h4 {
            margin-bottom: 0.5rem;
            font-size: 1.75rem;
            font-weight: 400;
         }

         > span {
            font-weight: 700;
            font-size: 2rem;
         }

         div {
            display: flex;
            align-items: center;
            margin: 0.875rem 0;
            gap: 2rem;

            div {
               flex-shrink: 0;
               display: flex;
               align-items: center;
               gap: 0.5rem;

               button {
                  background: none;
                  border: none;
                  flex: 0;

                  display: flex;
                  align-items: center;
                  justify-content: center;

                  > svg {
                     fill: none;
                     width: 2rem;
                     height: 2rem;
                  }
               }

               span {
                  display: block;
                  /* background: ${({ theme }) => theme.colors.white}; */
                  padding: 0.125rem 0.75rem;
                  border-radius: 4px;

                  font-weight: 500;
                  font-size: 1.5rem;
                  color: ${({ theme }) => theme.colors.white};
               }
            }

            button {
               flex-shrink: 0;
               background: none;
               border: none;

               display: flex;
               align-items: center;
               justify-content: center;

               > svg {
                  fill: ${({ theme }) => theme.colors.yellow};
                  width: 1.75rem;
                  height: 1.75rem;
               }
            }
         }

         h5 {
            span {
               display: block;
               font-size: 1.75rem;
               font-weight: 400;
            }
            font-weight: 700;
            font-size: 2.5rem;
         }
      }

      @media screen and (max-width: 540px) {
         grid-template-columns: 1fr;

         padding: 1rem;

         > div:first-child {
            height: 10rem;
         }

         > div:last-child {
            div {
               gap: 2.5rem;
            }

            h5 {
               span {
                  font-size: 1.5rem;
               }
               font-size: 2.2rem;
            }
         }
      }
   }
`;
