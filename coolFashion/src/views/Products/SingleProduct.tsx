import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../firestore-config";
import { IProduct } from "../../Interfaces/Interfaces";
import { Link, useParams } from 'react-router-dom'
import { title } from "process";
import "./SingleProduct.css";
import Share from "../../components/Share"

const SingleProduct = () => {
    const productCollectionRef = collection(db, "products");
    const [products, setProducts] = useState<IProduct[]>([])
    
  // Hämta produkter
  const getProducts = async () => {
    const productData = await getDocs(productCollectionRef);
    setProducts(productData.docs.map((doc) => ({
        ...(doc.data() as IProduct),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  const { productTitle } = useParams();
  const product = products.find((product) => product.title === productTitle);
  
  

  return(
    <div className="container">
        <div className='product'>
            <img className="prodbild" src={product?.imageUrl} alt={product?.title} />
            <h2>{product?.title}</h2>
            <Share description={"Riktigt fett plagg!"}/>
            <Link to='/products'>Tillbaka till produkter</Link>
        </div>
    </div>
  );
}

export default SingleProduct;