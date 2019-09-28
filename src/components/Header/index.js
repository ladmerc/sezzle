import React from "react";

function Header({ user, login, logout }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Real Calc</a>

      <div className="container-fluid2">
        <ul className="nav-list">
          {user ?
            <li className="nav-link p-0 pt-1">
              <span className="text-white mr-3">Hi, {user.displayName}</span>
              <a href="/logout" onClick={logout}>Logout</a>
            </li> :
            <button 
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={login}
            >
              Login With Google
            </button>
          }
        </ul>
      </div >
    </nav>
  );
}

export default Header;
