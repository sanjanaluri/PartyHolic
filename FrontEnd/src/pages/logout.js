import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import { TOKEN } from "../Utils/constant";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  dispatch({ type: "USER", payload: false });

  const out = () => {
    console.log(TOKEN);
    console.log("TOKEN REMOVED");
    localStorage.removeItem(TOKEN);
    console.log(TOKEN);
  };

  return (
    <>
      <h1>Logged out successfully</h1>

      <a href="#" class="text-purple-500 hover:text-purple-700 font-semibold">
        <Link to="/" onClick={out}>
          {" "}
          Go to homepage{" "}
        </Link>
      </a>
    </>
  );
};
export default Logout;
