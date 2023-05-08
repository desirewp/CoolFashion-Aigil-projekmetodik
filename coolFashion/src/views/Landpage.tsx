import React from "react";
import "./Landpage.css";
import Slider from "../components/Slider";
import Bild from "../assets/placeholder.jpg";
import LastFiveItems, { ListItem } from "../components/LastFiveItems";
import pic1 from "../assets/dino.jpg";
import pic2 from "../assets/dfh.jpg";
import pic3 from "../assets/blue jacket.jpg"
import pic4 from "../assets/yellow hood.jpg"
import pic5 from "../assets/GREYTSHIRT.jpg"



const Landing = () => {
  const list: ListItem[] = [
    {
      id: 1,
      name: "ej med1",
      picture: pic2,
    },
    {
      id: 2,
      name: "ej med2",
      picture: pic1,
    },
    {
      id: 3,
      name: "GRÅ TSHIRT",
      picture: pic5,
    },
    {
      id: 4,
      name: "BLÅ JACKA",
      picture: pic3,
    },
    {
      id: 5,
      name: "GUL HOODIE",
      picture: pic4,
    },
    {
      id: 6,
      name: "DINO TSHIRT",
      picture: pic1,
    },
    {
      id: 7,
      name: "SPARTA TSHIRT",
      picture: pic2,
    },
  ];

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

        <h2>Nyheter!</h2>
        <div>
          <LastFiveItems list={list} />
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
