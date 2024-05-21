import { Link } from "react-router-dom";
import { Container } from "./styles";
import Logo from "../../assets/logo.svg";
import CartIcon from "../../assets/shopping-cart.svg?react";
import { useCart } from "../../hooks/useCart";

export function OrderHeader() {
   const { cart } = useCart();

   return (
      <Container>
         <Link to={"/"}>
            <img src={Logo} alt='Logo da plataforma' />
         </Link>

         <div>
            <div>
               <h3>Meus pedidos</h3>
               <span>{`${cart.length}`.padStart(2, "0")} lanche(s)</span>
            </div>
            <CartIcon />
         </div>
      </Container>
   );
}
