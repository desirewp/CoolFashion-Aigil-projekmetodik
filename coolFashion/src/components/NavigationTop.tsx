import { Link } from "react-router-dom";
import "./NavigationTop.css";

const NavigationTop = () => {
  return (
    <>
      <nav>
        <Link to="/start">
          <p className="logotype">CoolFashion</p>
        </Link>
        <ul className="link-list">
          <li>
            <Link to="/start" className="active">
              Start
            </Link>
          </li>
          <li>
            <a href="#">Populärt</a>
          </li>
          <li>
            <Link to="/products">Produkter</Link>
          </li>
          <li>
            <div className="flex-row-center">
              <a href="#">Kläder</a>
              <span className="material-symbols-outlined down-arrow">
                keyboard_arrow_down
              </span>
            </div>
            <ul className="sub-menu">
              <li className="column">
                <div className="col-content">
                  <h3>Killar</h3>
                  <a href="#">T-shirts</a>
                  <a href="#">Byxor</a>
                  <a href="#">Skor</a>
                  <a href="#">Alla killkläder</a>
                </div>
              </li>
              <li className="column">
                <div className="col-content">
                  <h3>Tjejer</h3>
                  <a href="#">Jackor</a>
                  <a href="#">Klänningar</a>
                  <a href="#">Byxor & shorts</a>
                  <a href="#">Alla tjejkläder</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex-row-center">
              <a href="#">Accessoarer</a>
              <span className="material-symbols-outlined down-arrow">
                keyboard_arrow_down
              </span>
            </div>
            <ul className="sub-menu">
              <li className="column">
                <div className="col-content">
                  <h3>Killar</h3>
                  <a href="#">Väskor</a>
                  <a href="#">Klockor</a>
                  <a href="#">Smycken</a>
                  <a href="#">Alla kategorier</a>
                </div>
              </li>
              <li className="column">
                <div className="col-content">
                  <h3>Tjejer</h3>
                  <a href="#">Väskor</a>
                  <a href="#">Klockor</a>
                  <a href="#">Smycken</a>
                  <Link to="*">Alla kategorier</Link>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div className="flex-row-center">
              <a href="#">Outlet</a>
              <span className="material-symbols-outlined down-arrow">
                keyboard_arrow_down
              </span>
            </div>
            <ul className="sub-menu">
              <li className="column">
                <div className="col-content">
                  <h3>Killar</h3>
                  <a href="#">Kläder</a>
                  <a href="#">Skor</a>
                  <a href="#">Sport & träning</a>
                  <a href="#">Alla kategorier</a>
                </div>
              </li>
              <li className="column">
                <div className="col-content">
                  <h3>Tjejer</h3>
                  <a href="#">Kläder</a>
                  <a href="#">Skor</a>
                  <a href="#">Sport & träning</a>
                  <a href="#">Alla kategorier</a>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact">Kontakta oss</Link>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        <div>
          <span className="material-symbols-outlined">search</span>
          <Link to="/shoppingCart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="/wishlist">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
        <Link to="/admin" className="login-btn">
          Logga in
        </Link>
      </nav>
    </>
  );
};

export default NavigationTop;
