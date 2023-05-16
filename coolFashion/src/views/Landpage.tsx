import React, { useEffect, useState } from "react";
import "./Landpage.css";

// Component imports
import Slider from "../components/Slider";
import LastFiveItems, { ListItem } from "../components/LastFiveItems";

// Image imports
import pic1 from "../assets/dino.jpg";
import pic2 from "../assets/dfh.jpg";
import pic3 from "../assets/blue jacket.jpg";
import pic4 from "../assets/yellow hood.jpg";
import pic5 from "../assets/GREYTSHIRT.jpg";

import img1 from "../assets/img1.jpg";

// Database Imports
import { db } from "../../firestore-config";
import { collection, getDocs } from "firebase/firestore";
import { ProductDB } from "../Classes/classes";

const Landing = () => {
  const productCollectionRef = collection(db, "products");
  const [products, setProducts] = useState<ProductDB[]>([]);
  const [fiveProducts, setFiveProducts] = useState<ProductDB[]>([]);
  // Hämta produkter
  const getProducts = async () => {
    const productData = await getDocs(productCollectionRef);
    setProducts(
      productData.docs.map((doc) => ({
        ...(doc.data() as ProductDB),
      }))
    );
    setFiveProducts(products.slice(0, 4));
  };

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

  useEffect(() => {
    getProducts();
  }, []);

  const productRowElement = fiveProducts.map((product) => {
    return (
      <div className="product click" key={product.id}>
        <img
          className="product-img"
          src={product.imageUrl}
          alt={product.title}
        />
        <h4>{product.title}</h4>
        <h5>1000 kr</h5>
      </div>
    );
  });

  return (
    <div className="Container">
      <div className="picholder">
        <h3 className="freeship">
          Gratis frakt på alla beställningar under maj!
        </h3>
      </div>
      <div className="Landing-start">
        <div className="rad">{productRowElement}</div>
        <div className="news">
          <h2>Nyheter!</h2>
          <div className="rad">
            <LastFiveItems list={list} />
          </div>
        </div>

        {/* Slider Slider Slider*/}
        <div className="slider click">
          <h2>Populära kategorier</h2>
          <Slider></Slider>
        </div>

        <div className="banner">
          <h2 className="skate click">SKATE HÄR</h2>
        </div>

        <div className="four-by-four">
          <div className="twopicone">
            <div className="img img1 click">
              <h3 className="specialtext">COOLA TISHOR</h3>
            </div>
            <div className="img img2 click">
              <h3 className="specialtext">DISTRESSED DENIM</h3>
            </div>
          </div>
          <div className="twopicone">
            <div className="img img3 click">
              <h3 className="specialtext">TENNISSKOR</h3>
            </div>
            <div className="img img4 click">
              <h3 className="specialtext">SKATE SKIRTS</h3>
            </div>
          </div>
        </div>

        {/* <div className="bannertwo click">
          <h2 className="skate">FYNDA HÄR</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Landing;
