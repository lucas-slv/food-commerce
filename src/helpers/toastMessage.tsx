import { FaCheckCircle } from "react-icons/fa";
import { toast } from "sonner";

export function toastMessage(snack: string, name: string, message: string) {
   return toast(`${snack} ${name} ${message}`, {
      style: {
         fontSize: "1rem",
         boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.6)",
         padding: "0.75rem",
         borderBottom: "6px solid #23DB42",
         color: "#141518",
         gap: "1rem",
      },
      position: "top-right",
      icon: <FaCheckCircle color='#23DB42' size={25} />,
   });
}
