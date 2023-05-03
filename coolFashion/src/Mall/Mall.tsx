import Footer from "../components/Footer";
import NavigationTop from "../components/NavigationTop";
import Landing from "../views/Landpage"
import "./Mall.css";

function Mall() {
  return (
    <section className="frame">
      <NavigationTop></NavigationTop>
      <div className="content-container">
        <Landing></Landing>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Mall;
