import { Head } from "../../../components/Head/head";
import { SnackTitle } from "../../../components/SnackTitle/snack_title";
import { Snacks } from "../../../components/Snacks/snacks";
import { useSnack } from "../../../hooks/useSnack";

export function Burgers() {
   const { burgers } = useSnack();

   return (
      <>
         <Head title='Hambúrgueres' />
         <SnackTitle>Hambúrgueres</SnackTitle>

         <Snacks snacks={burgers}></Snacks>
      </>
   );
}
