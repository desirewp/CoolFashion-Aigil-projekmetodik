import Footer from "../components/Footer";
import NavigationTop from "../components/NavigationTop";
import "./Mall.css";

function Mall() {
  return (
    <section className="frame">
      <NavigationTop></NavigationTop>
      <div className="content-container">
        <p>Testar Roboto</p>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Mall;
