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
  const [cart, setCart] = useState<ProductDB[]>([]);

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

  useEffect(() => {
    getProducts();

    const test = localStorage.getItem("cartItems");
    if (test) {
      const object = JSON.parse(test);
      setCart(object);
      alert("alert, ALERT!" + object);
    }
  }, []);

  const { productTitle } = useParams();
  const serchResultProduct = products.filter(
    (product) => product.title === productTitle
  );
  const product = serchResultProduct[0];

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter((cart) => cart.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <div className="product">
        <Link to="/products">
          <button type="button">Tillbaka till produkter</button>
        </Link>
        <br />
        <img
          className="prodbild"
          src={product?.imageUrl}
          alt={product?.title}
        />
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <button onClick={addToCart}>Lägg till i varukorgen</button>
        <button onClick={removeFromCart}>Rensa varukorgen</button>
        <div>
          <Share description={"Riktigt fett plagg!"} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
