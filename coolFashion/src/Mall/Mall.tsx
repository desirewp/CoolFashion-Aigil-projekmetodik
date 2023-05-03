import Footer from "../components/Footer";
import NavigationTop from "../components/NavigationTop";
import Landing from "../views/Landgpage";
import "./Mall.css";

function Mall() {
  return (
    <section className="frame">
      <NavigationTop></NavigationTop>
      <div className="content-container">
        <Landing></Landing>
        <p>Testar Roboto</p>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Mall;
