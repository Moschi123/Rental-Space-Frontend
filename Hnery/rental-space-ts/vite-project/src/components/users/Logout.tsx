import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth0();

  const signOut = () =>
    logout({ logoutParams: { returnTo: window.location.origin } });

  return (
    <NavLink
      className="navlink"
      to="#"
      onClick={signOut}
    >
      Logout
    </NavLink> 
  );
};

export default Logout;
