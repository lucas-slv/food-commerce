import { CurrencyFormat } from "../../helpers/currencyFormat";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

interface SnacksProps {
   snacks: {
      id: number;
      name: string;
      img: string;
      description: string;
      price: number;
   }[];
}

export function Snacks({ snacks }: SnacksProps) {
   return (
      <Container>
         {snacks.map((snack) => (
            <div key={snack.id} className='snack'>
               <h2>{snack.name}</h2>
               <img src={snack.img} alt='' />
               <p>{snack.description}</p>

               <div>
                  <strong>{CurrencyFormat(snack.price)}</strong>
                  <button type='button'>
                     <FiPlus size={25} color='#fff' />
                  </button>
               </div>
            </div>
         ))}
      </Container>
   );
}
