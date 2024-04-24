import { ReactNode } from "react";
import { Title } from "./styles";

interface SnackTitleProps {
   children: ReactNode;
}

export function SnackTitle({ children }: SnackTitleProps) {
   return <Title>{children}</Title>;
}
