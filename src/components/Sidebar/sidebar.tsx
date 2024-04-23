/// <reference types="vite-plugin-svgr/client" />
import MenuIcon from "../../assets/menu.svg";
import BurgerIcon from "../../assets/burger.svg?react";
import SodaIcon from "../../assets/soda.svg?react";
import PizzaIcon from "../../assets/pizza.svg?react";
import IceCreamIcon from "../../assets/ice-cream.svg?react";
import { Container } from "./styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
   const [menuOpen, setMenuOpen] = useState(false);

   function handleToggleMenu() {
      setMenuOpen(!menuOpen);
   }

   return (
      <Container isMenuOpen={menuOpen}>
         <button type='button' onClick={handleToggleMenu}>
            <img src={MenuIcon} alt='Icone para abrir o menu' />
         </button>

         <nav>
            <ul>
               <li>
                  <NavLink to='/'>
                     <BurgerIcon />
                     <span>Hambúrgueres</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to='pizzas'>
                     <PizzaIcon />
                     <span>Pizzas</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to='drinks'>
                     <SodaIcon />
                     <span>Refrigerantes</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink to='ice-creams'>
                     <IceCreamIcon />
                     <span>Sobremesas</span>
                  </NavLink>
               </li>
            </ul>
         </nav>
      </Container>
   );
}
