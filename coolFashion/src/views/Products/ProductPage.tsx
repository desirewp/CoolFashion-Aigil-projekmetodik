import { useEffect, useState } from "react";
import "./ProductPage.css";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../firestore-config";
import { IProduct } from "../../Interfaces/Interfaces";


const ProductPage = () => {
    const dbRef = db;
    const productCollectionRef = collection(dbRef, "products");
    const [products, setProducts] = useState<IProduct[]>([])
    
  // Get
  const getProducts = async () => {
    const productData = await getDocs(productCollectionRef, );
    setProducts(productData.docs.map((doc) => ({
        ...(doc.data() as IProduct),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-field">{products.map((item) => 
    <div className="product-card"> 
        <img className="product-img" src={item.imageUrl}></img>
        <p className="product-title">{item.title}</p>
    </div>
    
)}</div>
)}

export default ProductPage;