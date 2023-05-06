import "./Landpage.css";
import Slider from "../components/Slider";
import Bild from "../assets/placeholder.jpg";

const Landing = () => {
  return (
    <div className="Container">
      <div className="Landing-start">
        <div className="picholder">
          <div className="pic click">
            <h3 className="freeship">Free Shipping & Returns</h3>
          </div>
        </div>
        <div className="bildrad">
          <div className="bildopris click">
            <img className="bildoprisbild" src={Bild} alt="" />
            <h5>produkt</h5>
            <h4>1000 kr</h4>
          </div>
          <div className="bildopris click">
            <img className="bildoprisbild" src={Bild} alt="" />
            <h5>produkt</h5>
            <h4>2000 kr</h4>
          </div>
          <div className="bildopris click">
            <img className="bildoprisbild" src={Bild} alt="" />
            <h5>produkt</h5>
            <h4>3000 kr</h4>
          </div>
          <div className="bildopris click">
            <img className="bildoprisbild" src={Bild} alt="" />
            <h5>produkt</h5>
            <h4>4000 kr</h4>
          </div>

          <div className="bildopris click">
            <img className="bildoprisbild" src={Bild} alt="" />
            <h5>produkt</h5>
            <h4>5000 kr</h4>
          </div>
        </div>

        {/* 
        Slider
        Slider
        Slider*/}
        <div className="slider click">
          <Slider></Slider>
        </div>

        <div className="banner click">
          <h2 className="skate">SKATE HÄR</h2>
        </div>

        <div className="twopicone">
          <div className="bildotext click">
            <h3 className="specialtext">COOLA TISHOR</h3>
          </div>
          <div className="bildotext click">
            <h3 className="specialtext">DISTRESSED DENIM</h3>
          </div>
        </div>
        <div className="twopictwo">
          <div className="bildotext click">
            <h3 className="specialtext">TENNISSKOR</h3>
          </div>
          <div className="bildotext click">
            <h3 className="specialtext">SKATE SHIRTS</h3>
          </div>
        </div>

        <div className="bannertwo click">
          <h2 className="skate">FYNDA HÄR</h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
