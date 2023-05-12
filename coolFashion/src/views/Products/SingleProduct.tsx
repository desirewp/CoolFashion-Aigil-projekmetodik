import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { IProduct } from "../../Interfaces/Interfaces";
import { Link, useParams } from "react-router-dom";
import { title } from "process";
import "./SingleProduct.css";
import { ProductDB } from "../../Classes/classes";

const cartFromlocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const SingleProduct = () => {
  const productCollectionRef = collection(db, "products");
  const [products, setProducts] = useState<ProductDB[]>([]);
  const [cart, setCart] = useState<ProductDB>(cartFromlocalStorage);
  let shoppingCart: ProductDB[] = [];
  let updatedShoppingCart: ProductDB[] = [];

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
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const { productTitle } = useParams();
  const serchResultProduct = products.filter(
    (product) => product.title === productTitle
  );
  const product = serchResultProduct[0];

  // Funktion som lägger till saker i localstorage aka vår shoppingcart
  // const handleAddToCart = () => {
  //   if (shoppingCart.length === 0) {
  //     updatedShoppingCart = [product];
  //   } else {
  //     updatedShoppingCart = [...updatedShoppingCart, product];
  //   }

  //   const uSCToString = JSON.stringify(updatedShoppingCart);
  //   localStorage.setItem("cart", uSCToString);
  // };

  const handleAddToCart = () => {
    // const uSCToString = 
    // Problem: Få datan att vilja bo i cart
    // setCart([...cart, product]);
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
        <button onClick={handleAddToCart}>Lägg till i varukorgen</button>
      </div>
    </div>
  );
};

export default SingleProduct;
