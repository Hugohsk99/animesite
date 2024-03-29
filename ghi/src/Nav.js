import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import { useToken, useAuthContext } from "./auth";
import Dropdown from 'react-bootstrap/Dropdown';
import LogoutButton from "./LogoutForm.js"


function Nav() {
  const [token] = useToken();
  const { isLoggedIn } = useAuthContext();

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Nipo Land
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={token ? "d-none" : "nav-link"} to="login/">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" aria-current="page" to="/top100/">
                  Top 100
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" aria-current="page" to="Search/">
                  Busca
                </NavLink>
              </li>
              {token && <div className="dropdown" aria-current="page">
                <button
                  className="btn btn-outline-light dropdown-toggle mr-1"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-current="page"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Favoritos
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-item"
                      to="/favoritos/"
                      id="dropdown"
                    >
                      Mostrar Favoritos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link dropdown-item"
                      to="favoritos/new"
                      id="dropdown"
                    >
                      Adicionar Favorito
                    </NavLink>
                  </li>
                </div>
              </div>}
              {token && <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle mr-1"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Lista de Assistidos
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-item"
                      to="/watchlist/"
                      id="dropdown"
                    >
                     Mostrar Histórico
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link dropdown-item"
                      to="/watchlist/new"
                      id="dropdown"
                    >
                      Adicionar a Lista de Assistidos
                    </NavLink>
                  </li>
                </div>
              </div>}
            </ul>
            <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
                <span className="navbar-toggler-icon"></span>
              </Dropdown.Toggle>

            <Dropdown.Menu>


              <div className="" id="navbarSupportedContent" aria-labelledby="dropdown">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {isLoggedIn ? (<></>) :
                    <li className="nav-item">
                      <NavLink className="nav-link text-black" aria-current="page" to="/signup">
                       Cadastro
                      </NavLink>
                    </li>
                  }
                </ul>
                <div className="navbar-end">

                  {isLoggedIn ? (
                    <>
                      <NavLink className="btn" to="/AccountDetailView">
                      Ver Conta
                      </NavLink>
                      <NavLink className="btn" to="/AccountEditForm">Editar Perfil</NavLink>
                    </>
                  ) : <></>}
                </div>

                <div className="navbar-item mb-2">
                  {isLoggedIn ? (
                    <LogoutButton />
                  ) : (
                    <NavLink className="btn btn-primary ms-2 mb-2" to="/login">
                      Login
                    </NavLink>
                  )}
                </div>
              <div/>
              </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
