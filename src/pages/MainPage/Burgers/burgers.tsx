import { useEffect, useState } from "react";
import { Head } from "../../../components/Head/head";
import { SnackTitle } from "../../../components/SnackTitle/snack_title";
import { Snacks } from "../../../components/Snacks/snacks";

export function Burgers() {
   const [burgers, setBurgers] = useState([]);

   useEffect(() => {
      const url = new URL("http://localhost:5000/burgers"); // JSON-server tests

      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            setBurgers(data);
         });
   }, []);

   return (
      <>
         <Head title='Hambúrgueres' />
         <SnackTitle>Hambúrgueres</SnackTitle>

         <Snacks snacks={burgers}></Snacks>
      </>
   );
}
