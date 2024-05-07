import { Head } from "../../../components/Head/head";
import { SnackTitle } from "../../../components/SnackTitle/snack_title";
import { Snacks } from "../../../components/Snacks/snacks";
import { useSnack } from "../../../hooks/useSnack";

export function Pizzas() {
   const { pizzas } = useSnack();

   return (
      <>
         <Head title='Pizzas' />
         <SnackTitle>Pizzas</SnackTitle>
         <Snacks snacks={pizzas}></Snacks>
      </>
   );
}
