import "./Landpage.css";
import Bild from "../assets/placeholder.jpg"

const Landing = () => {
  return (
    <div className="Landing-start">
        <div className="picholder">
        <div className="pic">    
        <h3 className="freeship">Free Shipping & Returns</h3>
        </div>
        </div>
        
        <div className="bildrad">
            <div className="bildopris">
                <img className="bildoprisbild" src={Bild} alt="" />
                <h5>produkt</h5>
                <h4>2000 kr</h4>
            </div>
            <div className="bildopris">
                <img className="bildoprisbild" src={Bild} alt="" />
                <h5>produkt</h5>
                <h4>2000 kr</h4>
            </div>
            <div className="bildopris">
                <img className="bildoprisbild" src={Bild} alt="" />
                <h5>produkt</h5>
                <h4>2000 kr</h4>
            </div>
            <div className="bildopris">
                <img className="bildoprisbild" src={Bild} alt="" />
                <h5>produkt</h5>
                <h4>2000 kr</h4>
            </div>
            <div className="bildopris">
                <img className="bildoprisbild" src={Bild} alt="" />
                <h5>produkt</h5>
                <h4>2000 kr</h4>
            </div>

        </div>

        <div className="banner">
            <h2 className="skate" >SKATE HÄR</h2>
        </div>
        
      
    </div>
  );
};

export default Landing;
