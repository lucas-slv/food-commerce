import { CurrencyFormat } from "../../helpers/currencyFormat";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";
import { SkeletonSnack } from "./SkeletonSnacks/skeleton_snack";
import { SnackData } from "../../types/SnackData";
import { useCart } from "../../hooks/useCart";

interface SnacksProps {
   snacks: SnackData[];
}

export function Snacks({ snacks }: SnacksProps) {
   const { cart, addSnackIntoCart } = useCart();
   return (
      <Container>
         {!snacks.length
            ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
            : snacks.map((snack) => {
                 const snackExistent = cart.find(
                    (item) => item.snack === snack.snack && item.id === snack.id,
                 );

                 return (
                    <div key={snack.id} className='snack'>
                       {snackExistent && <span>{snackExistent.quantity}</span>}
                       <h2>{snack.name}</h2>
                       <img src={snack.image} alt='' />
                       <p>{snack.description}</p>

                       <div>
                          <strong>{CurrencyFormat(snack.price)}</strong>
                          <button type='button' onClick={() => addSnackIntoCart(snack)}>
                             <FiPlus size={25} color='#fff' />
                          </button>
                       </div>
                    </div>
                 );
              })}
      </Container>
   );
}
