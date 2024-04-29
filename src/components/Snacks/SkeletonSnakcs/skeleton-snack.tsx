import { Skeleton } from "../../Skeleton/skeleton";
import { Container } from "../styles";

export function SkeletonSnack() {
   return (
      <div className='skeleton-wrapper'>
         <Container>
            <Skeleton type='title' />
            <Skeleton type='thumbnail' />
            <Skeleton type='title' />
            <Skeleton type='title' />

            <div>
               <Skeleton type='title' />
               <Skeleton type='image' />
            </div>
         </Container>
      </div>
   );
}
