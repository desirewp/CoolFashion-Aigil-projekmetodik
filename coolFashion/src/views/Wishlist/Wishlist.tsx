// import "./Wishlist.css";

// const Wishlist = () => {

//   return (
//     <div>
//       <p>hej</p>
//     </div>
//   );
// };
// export default Wishlist;

// import "./Wishlist.css";
// import { useEffect, useState } from "react";
// import { ProductDB } from "../../Classes/classes";
// import "./Wishlist.css";
// import { Link } from "react-router-dom";

// const Wishlist = () => {
//   let [wish, setWish] = useState<ProductDB[]>([]);
//   let updatedWishlist: ProductDB[] = [];

//   useEffect(() => {
//     const getWish = localStorage.getItem("wishItems");
//     setWish(JSON.parse(getWish || "[]"));
//   }, []);

//   const removeFromWishlist = (productId: string) => {
//     // Vi hämtar innehåll från cartItems
//     let exixtingWish = localStorage.getItem("wishItems");
//     // Vi konverterar cartitems (det som lagrats) till en {}[]
//     let objectArrExistingWish: ProductDB[] = JSON.parse(exixtingWish || "[]");
//     // tar bort det önskade objektet från Cart

//     updatedWishlist = objectArrExistingWish.filter(
//       (wish) => wish.id !== productId
//     );

//     // Gör den nya cart till string
//     let stringAddToWishlist = JSON.stringify(updatedWishlist);
//     // Lagrar den nya carten på cartItems med produkten borttagen
//     localStorage.setItem("wishItems", stringAddToWishlist);
//     setWish(updatedWishlist);
//   };

//   const emptyWishlist = () => {
//     localStorage.removeItem("wishItems");
//     setWish([]);
//   };

//   const emptyWishElement = (
//     <p>Du har inte några produkter inlagda i din wishlist ännu</p>
//   );

//   const productsElement = wish.map((product) => {
//     return (
//       <div key={product.id} className="product-container">
//         <Link to={`/products/${product.title}`}>
//           <img src={product.imageUrl} alt={product.title} className="click" />
//         </Link>
//         <Link to={`/products/${product.title}`}>
//           <p>{product.title}</p>
//         </Link>
//         <p className="category">{product.category}</p>
//         <p>{product.description}</p>

//         <div>
//           <span
//             className="material-symbols-outlined delete-btn"
//             onClick={() => removeFromWishlist(product.id)}
//           >
//             delete
//           </span>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <>
//       <div className="heading-container">
//         <span className="material-symbols-outlined icon-cart">
//           shopping_cart
//         </span>
//         <h1> Önskelista</h1>
//       </div>

//       <div className="products">
//         <div className="flex-right">
//           <button className="clear-btn" onClick={emptyWishlist}>
//             Rensa önskelistan
//           </button>
//         </div>

//         {productsElement}
//         {/* {cart ==  ?productsElement : emptyCartElement} */}
//         <div className="flex-right">
//           <button>Lägg till i varukorg</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Wishlist;

import "./Wishlist.css";
import { useEffect, useState } from "react";
import { ProductDB } from "../../Classes/classes";
import "./Wishlist.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wish, setWish] = useState<ProductDB[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    const getWish = localStorage.getItem("wishItems");
    setWish(JSON.parse(getWish || "[]"));
  }, []);

  const removeFromWishlist = (productId: string) => {
    let existingWish = localStorage.getItem("wishItems");
    let objectArrExistingWish: ProductDB[] = JSON.parse(existingWish || "[]");

    const updatedWishlist = objectArrExistingWish.filter(
      (wish) => wish.id !== productId
    );

    let stringAddToWishlist = JSON.stringify(updatedWishlist);
    localStorage.setItem("wishItems", stringAddToWishlist);
    setWish(updatedWishlist);
  };

  const emptyWishlist = () => {
    localStorage.removeItem("wishItems");
    setWish([]);
  };

  const handleProductSelection = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const emptyWishElement = (
    <p>Du har inte några produkter inlagda i din wishlist ännu</p>
  );

  const productsElement = wish.map((product) => {
    const isSelected = selectedProducts.includes(product.id);

    return (
      <div key={product.id} className="product-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => handleProductSelection(product.id)}
          />
        </div>
        <Link to={`/products/${product.title}`}>
          <img src={product.imageUrl} alt={product.title} className="click" />
        </Link>
        <Link to={`/products/${product.title}`}>
          <p>{product.title}</p>
        </Link>
        <p className="category">{product.category}</p>
        <p>{product.description}</p>

        <div>
          <span
            className="material-symbols-outlined delete-btn"
            onClick={() => removeFromWishlist(product.id)}
          >
            delete
          </span>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="heading-container">
        <span className="material-symbols-outlined icon-cart">
          shopping_cart
        </span>
        <h1> Önskelista</h1>
      </div>

      <div className="products">
        <div className="flex-right">
          <button className="clear-btn" onClick={emptyWishlist}>
            Rensa önskelistan
          </button>
        </div>

        {productsElement}
        {/* {cart ==  ?productsElement : emptyCartElement} */}
        <div className="flex-right">
          <button>Lägg till i varukorg</button>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
