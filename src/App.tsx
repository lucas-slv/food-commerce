import { AppRoutes } from "./routes";

import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { Normalize } from "styled-normalize";

export function App() {
   return (
      <Theme>
         <AppRoutes />
         <GlobalStyle />
         <Normalize />
      </Theme>
   );
}
