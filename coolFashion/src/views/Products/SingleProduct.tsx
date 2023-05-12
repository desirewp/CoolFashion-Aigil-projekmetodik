import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { IProduct } from "../../Interfaces/Interfaces";
import { Link, useParams } from "react-router-dom";
// import { title } from "process";
import "./SingleProduct.css";
import { ProductDB } from "../../Classes/classes";
import Share from "../../components/Share"



const SingleProduct = () => {

  const cartFromlocalStorage = JSON.parse(localStorage.getItem("kundvagn") || "[]");
  const [products, setProducts] = useState<ProductDB[]>([]);
  const [cart, setCart] = useState<ProductDB[]>(cartFromlocalStorage);
  
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
  }, []);
  
  
  const { productTitle } = useParams();
  const serchResultProduct = products.filter(
    (product) => product.title === productTitle
    );
    const product = serchResultProduct[0];

    
    
    useEffect(() => {
      localStorage.setItem("kundvagn", JSON.stringify(cart));
      console.log("useEffect" + cart);
    }, [cart]);
    
    const handleAddToCart = () => {
      console.log("Innan uppdatering:" + cart)
    const updatedCart: ProductDB[] = [...cart, product];
    console.log("updated cart" + updatedCart)
    setCart(updatedCart);
  }

  const removeAllFromCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
    console.log(cart);
  } 

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
        <button onClick={removeAllFromCart}>Rensa varukorgen</button>
        <div>
          <Share description={"Riktigt fett plagg!"} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
