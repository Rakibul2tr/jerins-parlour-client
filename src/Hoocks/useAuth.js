import { useContext } from "react"
import { Mycontext } from "../ContextApi/ContextProvider"

const useAuth=()=>{
    return useContext(Mycontext)
}
export default useAuth;