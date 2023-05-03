import "./NavigationTop.css";

const NavigationTop = () => {
  return (
    <>
      <nav>
        {/* Logotyp här */}
        <div className="main-items">
          <p>CoolFashion</p>
        </div>
      </nav>
      <div className="dropdown">
        <button className="dropbtn">Accessoarer</button>
        <div className="dropdown-content">
          <div className="dropdown-column">
            <h3>Killar</h3>
            <ul>
              <li>Väskor</li>
              <li>Smycken</li>
              <li>Klockor</li>
              <li>Alla killaccessoarer</li>
            </ul>
          </div>
          <div className="dropdown-column">
            <h3>Tjejer</h3>
            <ul>
              <li>Väskor</li>
              <li>Smycken</li>
              <li>Klockor</li>
              <li>Alla tjejaccessoarer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Outlet</button>
        <div className="dropdown-content">
          <div className="dropdown-column">
            <h3>Killar</h3>
            <ul>
              <li>Kläder</li>
              <li>Skor</li>
              <li>Sport & träning</li>
              <li>Alla kategorier</li>
            </ul>
          </div>
          <div className="dropdown-column">
            <h3>Tjejer</h3>
            <ul>
              <li>Kläder</li>
              <li>Skor</li>
              <li>Sport & träning</li>
              <li>Alla kategorier</li>
            </ul>
          </div>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Start</a>
          </li>
          <li>
            <a href="#">Populärt</a>
          </li>
          <li>
            <a href="#">Kläder</a>
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
            <a href="#">Accessoarer</a>
            <ul className="sub-menu">
              <li>
                <h3>Killar</h3>
                <a href="#">Photoshop</a>
              </li>
              <li>
                <h3>Tjejer</h3>
                <a href="#">Populärt</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Outlet</a>
            <ul className="sub-menu">
              <li>
                <h3>Killar</h3>
                <a href="#">Photoshop</a>
              </li>
              <li>
                <h3>Tjejer</h3>
                <a href="#">Populärt</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationTop;
