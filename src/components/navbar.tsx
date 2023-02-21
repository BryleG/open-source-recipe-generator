import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/add-dish" > Add Dish </Link>
      <Link to="/login"> Login </Link>

      <div>
        {user && (
          <>
            <p>{auth.currentUser?.displayName}</p>
            <img src={user?.photoURL || ""} width="100" height="100" alt="" />
            <button onClick={signUserOut}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};
