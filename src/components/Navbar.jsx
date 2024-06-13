import "bootstrap/dist/css/bootstrap.min.css";
import css from "./Navbar.module.css";
import { flushSync } from "react-dom";

function Navbar({ setExplore, setCart, setAboutMe, setContact}) {
  return (
    <nav
      className={`row bg-light mw-100 fixed-top justify-content-center d-flex ${css.navbarmain} border-bottom border-primary navbar navbar-expand-lg`}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-lg-none rounded px-2" id="logo" href="#">
          QuickCart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul
            className={`nav ${css.ul} navbar py-0 mx-0 d-flex align-items-center py-2 justify-content-center w-100 container-fluid`}
          >
            <li
              className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded`}
              onClick={() => {
                setAboutMe(true);
                setCart(false);
                setExplore(false);
                setContact(false);
              }}
            >
              About
            </li>
            <li
              className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded`} onClick={() => {
                setAboutMe(false);
                setCart(false);
                setExplore(false);
                setContact(true);
              }}
            >
              Contact
            </li>
            <li
              className={`d-none d-lg-block ${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded-top-right`}
              id="logo"
              onClick={() => {
                setCart(false);
                setExplore(false);
                setAboutMe(false);
                setContact(false);
              }}
            >
              QuickCart
            </li>
            <li
              onClick={() => {
                {
                  setExplore(true);
                  setCart(false);
                  setAboutMe(false);
                  setContact(false);
                }
              }}
              className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded`}
            >
              Explore
            </li>
            <li
              className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded cartnav`}
              onClick={() => {
                setCart(true);
                setExplore(false);
                setAboutMe(false);
                setContact(false);
              }}
            >
              Cart
              <span className="mybdg badge bg-primary badge-primary">
                {localStorage.getItem("productsInCart")
                  ? JSON.parse(localStorage.getItem("productsInCart")).length
                  : 0}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
