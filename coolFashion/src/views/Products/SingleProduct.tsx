import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { IProduct } from "../../Interfaces/Interfaces";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import { ProductDB, ShoppingCart } from "../../Classes/classes";
import Share from "../../components/Share";

const SingleProduct = () => {
  const [products, setProducts] = useState<ProductDB[]>([]);
  const [cart, setCart] = useState<ProductDB[]>([]);
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
    // Vi baserar den uppdaterade korgen på shopingCart (alltid tom)
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

  const removeFromCart = () => {
    // Vi hämtar innehåll från cartItems
    let exixtingCart = localStorage.getItem("cartItems");
    // Vi konverterar cartitems (det som lagrats) till en {}[]
    let objectArrExistingCart: ProductDB[] = JSON.parse(exixtingCart || "[]");
    // tar bort det önskade objektet från Cart
    updatedCart = objectArrExistingCart.filter(
      (cart) => cart.id !== product.id
    );

    // Gör den nya cart till string
    let stringAddToCart = JSON.stringify(updatedCart);
    // Lagrar den nya carten på cartItems med produkten borttagen
    localStorage.setItem("cartItems", stringAddToCart);
  };

  const emptyCart = () => {
    localStorage.removeItem("cartItems");
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
        <button onClick={removeFromCart}>Ta bort från varukorgen</button>
        <button onClick={emptyCart}>Rensa varukorgen</button>
        <div>
          <Share description={"Riktigt fett plagg!"} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
