import { useEffect, useState } from "react";
import "./ProductPage.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { IProduct } from "../../Interfaces/Interfaces";
import SearchFilter from '../../components/SearchFilter';

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

    <>
    <div>
      <h1>SÖK PRODUKT</h1>
      <SearchFilter products={products} />
    </div>
    
      </>
  );
};

export default ProductPage;
