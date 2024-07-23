import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/assets-png/2.png"
import './Navbar.css';
import Button from "../../components/Button/Button";
import { useUserContext } from "../../context/UserProvider";
import useLoginForm from '../../hooks/useLoginForm';
import { FaUserAlt } from "react-icons/fa";


export const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { token, user } = useUserContext();
  const recoverUser = JSON.parse(user)
  
  const {
    closeSession
} = useLoginForm();

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg" id="navbar-dom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="imagen logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"  
          onClick={toggleNavbar}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto justify-content-center">
            {token ? 
              <NavLink
                onClick={toggleNavbar}
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/dashboard/projects"
              >
              Contratar
              </NavLink>
            :
              <NavLink
                onClick={toggleNavbar}
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/login">
              Contratar
              </NavLink>
            }
            <NavLink
              onClick={toggleNavbar}
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/opportunities"
            >
              Oportunidades
            </NavLink>
            <NavLink
              onClick={toggleNavbar}
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/contacto"
            >
              Contactanos
            </NavLink>
            <NavLink
              onClick={toggleNavbar}
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/nosotros"
            >
              Nosotros
            </NavLink>
          </div>
          <div className="d-flex justify-content-center">

            {/* Si se esta logueado muestra el nombre del usuario, sino se ingresa */}
            {token ?
              <>
                <p className="p-user">{recoverUser.nombre}&nbsp;{recoverUser.apellido}</p> 
                <button className="btn-userAlt" onClick={()=>{closeSession()}}><FaUserAlt className="userAlt"/></button>
              </>
              : 
                <Button onClick={toggleNavbar} width="160px" type='default' to="/login">Ingresar</Button>}
          </div>
        </div>
      </div>
    </nav>
  );
};
