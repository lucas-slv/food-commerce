import { Head } from "../../../components/Head/head";
import { SnackTitle } from "../../../components/SnackTitle/snack_title";
import { Snacks } from "../../../components/Snacks/snacks";

export function Burgers() {
   const data = [
      {
         id: 2,
         snack: "burguer",
         name: "Double",
         img: "https://i.imgur.com/nERRB9n.jpg",
         description: "O maior da casa, duas carnes para você precisar de apenas um.",
         price: 32.9,
      },
      {
         id: 2,
         snack: "burguer",
         name: "Double",
         img: "https://i.imgur.com/nERRB9n.jpg",
         description: "O maior da casa, duas carnes para você precisar de apenas um.",
         price: 32.9,
      },
      {
         id: 2,
         snack: "burguer",
         name: "Double",
         img: "https://i.imgur.com/nERRB9n.jpg",
         description: "O maior da casa, duas carnes para você precisar de apenas um.",
         price: 32.9,
      },
      {
         id: 2,
         snack: "burguer",
         name: "Double",
         img: "https://i.imgur.com/nERRB9n.jpg",
         description: "O maior da casa, duas carnes para você precisar de apenas um.",
         price: 32.9,
      },
   ];

   return (
      <>
         <Head title='Hambúrgueres' />
         <SnackTitle>Hambúrgueres</SnackTitle>

         <Snacks snacks={data}></Snacks>
      </>
   );
}
