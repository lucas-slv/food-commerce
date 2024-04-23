import { Sidebar } from "../../components/Sidebar/sidebar";
import { Container } from "./styles";

import Logo from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";

export function MainPage() {
   return (
      <Container>
         <Sidebar />

         <section>
            <img src={Logo} alt='Logo da plataforma' />
            <Outlet />
         </section>
      </Container>
   );
}
