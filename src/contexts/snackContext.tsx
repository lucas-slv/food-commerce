// snackContext.tsx
import React, { createContext, useEffect, useState } from "react";
import { SnackData } from "../types/SnackData";

interface SnackContextProps {
   burgers: SnackData[];
   pizzas: SnackData[];
   drinks: SnackData[];
   iceCreams: SnackData[];
}

export const SnackContext = createContext({} as SnackContextProps);

export const SnackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [burgers, setBurgers] = useState<SnackData[]>([]);
   const [pizzas, setPizzas] = useState<SnackData[]>([]);
   const [drinks, setDrinks] = useState<SnackData[]>([]);
   const [iceCreams, setIceCreams] = useState<SnackData[]>([]);

   const fetchData = (url: string, setData: React.Dispatch<React.SetStateAction<SnackData[]>>) => {
      fetch(url)
         .then((response) => {
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            return response.json();
         })
         .then((data) => {
            setData(data);
         })
         .catch((error) => {
            console.error("There has been a problem with your fetch operation:", error);
         });
   };

   useEffect(() => {
      fetchData("http://localhost:5000/burgers", setBurgers);
      fetchData("http://localhost:5000/pizzas", setPizzas);
      fetchData("http://localhost:5000/drinks", setDrinks);
      fetchData("http://localhost:5000/ice-creams", setIceCreams);
   }, []);

   return (
      <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
         {children}
      </SnackContext.Provider>
   );
};
