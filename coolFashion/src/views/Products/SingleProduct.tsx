import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { IProduct } from "../../Interfaces/Interfaces";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import { ProductDB } from "../../Classes/classes";
import Share from "../../components/Share";

const SingleProduct = () => {
  const [products, setProducts] = useState<ProductDB[]>([]);
  let shoppingCart: ProductDB[] = [];
  let updatedCart: ProductDB[] = [];

  const productCollectionRef = collection(db, "products");

  // Hämta produkter
  const getProducts = async () => {
    const productData = await getDocs(productCollectionRef);
    setProducts(
      productData.docs.map((doc) => ({
        ...(doc.data() as IProduct),
        id: doc.id,
      }))
    );
  };

  const { productTitle } = useParams();
  const serchResultProduct = products.filter(
    (product) => product.title === productTitle
  );
  const product = serchResultProduct[0];

  useEffect(() => {
    getProducts();
  }, []);


  const addToCart = () => {
    // Vi baserar den uppdaterade korgen på shopingCart (alltid tom) but 🤷‍♀️
    updatedCart = [...shoppingCart, product];

    // Vi hämtar innehåll från cartItems
    let exixtingCart = localStorage.getItem("cartItems");
    // Vi konverterar cartitems (det som lagrats) till en {}[]
    let objectArrExistingCart = JSON.parse(exixtingCart || "[]");
    // Vi slår ihop existerande + nya till en cart
    let addToCart = [...objectArrExistingCart, ...updatedCart];
    // Vi konverterar nya korgen till string
    let stringAddToCart = JSON.stringify(addToCart);
    // Vi pushar upp resultatet till local storage
    localStorage.setItem("cartItems", stringAddToCart);
  };


  return (
    <div className="container">
      <div className="product">
        <Link to="/products">
          <button className="single-btn">Tillbaka till produkter</button>
        </Link>
        <br />
        <img
          className="prodbild"
          src={product?.imageUrl}
          alt={product?.title}
        />
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <button onClick={addToCart} className="single-btn">Lägg till i varukorgen</button>
     
        <div>
          <Share description={"Riktigt fett plagg!"} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
