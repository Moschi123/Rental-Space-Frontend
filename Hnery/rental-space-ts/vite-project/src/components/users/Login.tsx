import { useAuth0 } from "@auth0/auth0-react";
import "./login.scss";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <button onClick={() => loginWithRedirect()} className="login">
        Login
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Login;
