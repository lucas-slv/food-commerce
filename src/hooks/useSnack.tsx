import { useContext } from "react";
import { SnackContext } from "../contexts/snackContext";

export function useSnack() {
   return useContext(SnackContext);
}
