import { Button, Container } from "./styles";

import EmptyCartImage from "../../assets/man-and-burger.svg";

interface EmptyCartProps {
   title: string;
}

export function EmptyCart({ title }: EmptyCartProps) {
   return (
      <Container>
         <h2>{title}</h2>
         <Button to={"/"}>Checar o cardápio</Button>
         <img src={EmptyCartImage} alt='Homem com hambúrguer' />
      </Container>
   );
}
