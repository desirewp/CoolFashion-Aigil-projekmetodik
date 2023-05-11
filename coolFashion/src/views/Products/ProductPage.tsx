import { useEffect, useState } from "react";
import "./ProductPage.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { IProduct } from "../../Interfaces/Interfaces";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const productCollectionRef = collection(db, "products");
  const [products, setProducts] = useState<IProduct[]>([]);

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

  return (
    <div className="product-field">
      {products.map((product) => (
        <div key={product.title} className="product-card">
          <Link to={`/products/${product.title}`}>
            <img className="product-img" src={product.imageUrl}></img>
          </Link>
          <p className="product-title">{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
