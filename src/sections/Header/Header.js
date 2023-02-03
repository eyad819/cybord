import { Link } from "react-router-dom";
import "./Header.css";
import {auth} from '../../Confign';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from "firebase/auth";
import Logo from '../../assets/images/logo.png';
import NavIteam,{NavIteamDropDown} from "../../comp/Naviteam/NavIteam";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="navbar navbar-expand-md cybord-navbar navbar-dark ">
      {user && <h3>done</h3> }
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavIteam>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavIteam>
            <NavIteam>
              <a href="/#" className="nav-link">
                Browse
              </a>
            </NavIteam>
            <NavIteamDropDown>
              <a
                href="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Details
              </a>
              <ul className="dropdown-menu">
                <NavIteam>
                  <a href="/#" className="dropdown-item">
                  Frotinite
                  </a>
                </NavIteam>
                <li>
                  <a href="/#" className="dropdown-item">
                    Where to go next
                  </a>
                </li>
              </ul>
            </NavIteamDropDown>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Streams
              </a>
            </li>
            <NavIteam>
              <Link to="./profile" className="nav-link">
                Profile
              </Link>
            </NavIteam>
          </ul>
        </div>
      </div>
      <div
        id="extwaiokist"
        style={{ display: "none" }}
        v="fcoon"
        q="8dca215b"
        c="62.64"
        i={71}
        u="4.943"
        s={12022216}
        d={1}
        w="false"
        e=""
        a={2}
        m="BMe="
        vn="3gtra"
      >
        <div
          id="extwaigglbit"
          style={{ display: "none" }}
          v="fcoon"
          q="8dca215b"
          c="62.64"
          i={71}
          u="4.943"
          s={12022216}
          d={1}
          w="false"
          e=""
          a={2}
          m="BMe="
        />
      </div>
    </div>
  );
};

export default Header;
