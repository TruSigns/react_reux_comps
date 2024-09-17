import { useContext } from "react"
import NaviContext from "../context/navigation"


function useNavi() {
  return useContext(NaviContext)


}

export default useNavi
