import { useContext } from "react";
import { UserContext} from "../App"
import { Link } from "react-router-dom";
const Logout= () => {
    const {state,dispatch} = useContext(UserContext);
    dispatch({type :"USER" , payload :false});
    return (
    <>
     <h1>
         Logged out successfully
     </h1>

     <a
     href="#"
     class="text-purple-500 hover:text-purple-700 font-semibold"
    >
     <Link to="/"> Go to homepage </Link>
   </a>
   </>
    );
  };
  export default Logout;