import { Sidebar } from "../../components/Sidebar/sidebar";
import { Container } from "./styles";

import Logo from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";
import { MyOrder } from "../../components/MyOrder/my_order";

export function MainPage() {
   return (
      <Container>
         <Sidebar />

         <section>
            <img src={Logo} alt='Logo da plataforma' />
            <Outlet />
         </section>

         <MyOrder />
      </Container>
   );
}
