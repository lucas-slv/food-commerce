import { Head } from "../../../components/Head/head";
import { SnackTitle } from "../../../components/SnackTitle/snack_title";
import { Snacks } from "../../../components/Snacks/snacks";
import { useSnack } from "../../../hooks/useSnack";

export function Drinks() {
   const { drinks } = useSnack();

   return (
      <>
         <Head title='Bebidas' />
         <SnackTitle>Bebidas</SnackTitle>
         <Snacks snacks={drinks}></Snacks>
      </>
   );
}
