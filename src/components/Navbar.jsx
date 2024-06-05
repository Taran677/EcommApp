import css from "./Navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
    <nav className={`row bg-light mw-100 fixed-top justify-content-center d-flex ${css.navbarmain}`}>
      <ul
        className={`nav ${css.ul} navbar py-0 mx-5 d-flex align-items-center py-2 justify-content-center mw-100 container-fluid`}
      >
        <li
          className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded`}
        >
          About
        </li>
        <li
          className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded`}
        >
          Contact
        </li>
        <li
          className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded-top-right`} id="logo"
        >
          eCom
        </li>
        <li
          className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded`}
        >
          Explore
        </li>
        <li
          className={`${css.li} justify-content-center fw-normal nav-link btn btn-primary py-3 mx-2 text-center rounded`}
        >
          Categories
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
