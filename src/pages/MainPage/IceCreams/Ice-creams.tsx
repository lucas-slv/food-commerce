import { Head } from "../../../components/Head/head";
import { SnackTitle } from "../../../components/SnackTitle/snack_title";
import { Snacks } from "../../../components/Snacks/snacks";
import { useSnack } from "../../../hooks/useSnack";

export function IceCreams() {
   const { iceCreams } = useSnack();

   return (
      <>
         <Head title='Sobremesas' />
         <SnackTitle>Sobremesas</SnackTitle>
         <Snacks snacks={iceCreams} />
      </>
   );
}
