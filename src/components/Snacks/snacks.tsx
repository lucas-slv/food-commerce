import { CurrencyFormat } from "../../helpers/currencyFormat";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";
import { SkeletonSnack } from "./SkeletonSnakcs/skeleton-snack";

interface SnacksProps {
   snacks: {
      id: number;
      name: string;
      image: string;
      description: string;
      price: number;
   }[];
}

export function Snacks({ snacks }: SnacksProps) {
   return (
      <Container>
         {!snacks.length
            ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
            : snacks.map((snack) => (
                 <div key={snack.id} className='snack'>
                    <h2>{snack.name}</h2>
                    <img src={snack.image} alt='' />
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
