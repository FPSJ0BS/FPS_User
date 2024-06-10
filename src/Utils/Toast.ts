import { toast } from "react-toast"

export const Toast = (type:string,message:string)=>{
  type === "success"
    ? toast.success(message, {
        backgroundColor: "#14a077",
       
      })
    : toast.error(message, {
        backgroundColor: "#a83359",
      });
}