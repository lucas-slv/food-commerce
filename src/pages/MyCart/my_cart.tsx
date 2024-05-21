import { Head } from "../../components/Head/head";
import { OrderHeader } from "../../components/OrderHeader/order_header";
import { Table } from "../../components/Table/table";
import { Container } from "./styles";

export function MyCart() {
   return (
      <Container>
         <Head title='Carrinho' />
         <OrderHeader />
         <Table />
      </Container>
   );
}
