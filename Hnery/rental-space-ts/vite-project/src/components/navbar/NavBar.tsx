import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Login, Logout } from "../users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

const Navbar: React.FC = () => {
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const { isAuthenticated, user } = useAuth0();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
        setIsOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav>
      <div className="left">
        <NavLink to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Rental Space</span>
        </NavLink>
        <NavLink to="/">Sobre nosotros</NavLink>
        <NavLink to="/">Contacto</NavLink>
        <NavLink to="/">Agentes</NavLink>
      </div>
      <div className="right">
        {isAuthenticated ? (
          <div
            className="profile"
            onClick={() => setIsOpenProfile(!isOpenProfile)}
          >
            <img src={user?.picture} alt="" />

            {isOpenProfile && (
              <div className="submenu" ref={dropdownRef} id="dropdownHover">
                <h3>
                  <span>Cesar Martinez</span>
                  <span>FullStack Developer</span>
                </h3>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faUser} />
                    <NavLink className="navlink" to="/profile">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGear} />
                    <NavLink className="navlink" to="#">
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <Logout />
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Login />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
