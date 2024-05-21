import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage/main_page";
import { Burgers } from "./pages/MainPage/Burgers/burgers";
import { Pizzas } from "../src/pages/MainPage/Pizzas/pizzas";
import { Drinks } from "./pages/MainPage/Drinks/drinks";
import { IceCreams } from "./pages/MainPage/IceCreams/Ice-creams";
import { MyCart } from "./pages/MyCart/my_cart";

export function AppRoutes() {
   return (
      <Routes>
         <Route path='/' element={<MainPage />}>
            <Route path='/' element={<Burgers />} />
            <Route path='pizzas' element={<Pizzas />} />
            <Route path='drinks' element={<Drinks />} />
            <Route path='ice-creams' element={<IceCreams />} />
         </Route>
         <Route path='cart' element={<MyCart />} />
      </Routes>
   );
}
