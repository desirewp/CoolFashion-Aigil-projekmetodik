import { useEffect, useState } from "react";
import { ProductDB } from "../../Classes/classes";
import "./Shoppingcart.css";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  let [cart, setCart] = useState<ProductDB[]>([]);
  let updatedCart: ProductDB[] = [];

  useEffect(() => {
    const getCart = localStorage.getItem("cartItems");
    setCart(JSON.parse(getCart || "[]"));
  }, []);

  const removeFromCart = (productId: string) => {
    // Vi hämtar innehåll från cartItems
    let exixtingCart = localStorage.getItem("cartItems");
    // Vi konverterar cartitems (det som lagrats) till en {}[]
    let objectArrExistingCart: ProductDB[] = JSON.parse(exixtingCart || "[]");
    // tar bort det önskade objektet från Cart

    updatedCart = objectArrExistingCart.filter((cart) => cart.id !== productId);

    // Gör den nya cart till string
    let stringAddToCart = JSON.stringify(updatedCart);
    // Lagrar den nya carten på cartItems med produkten borttagen
    localStorage.setItem("cartItems", stringAddToCart);
    setCart(updatedCart);
  };

  const emptyCart = () => {
    localStorage.removeItem("cartItems");
    setCart([]);
  };

  // --------------HTML Element ---------------------
  const emptyCartElement = (
    <p>Du har inte några produkter inlagda i din varukorg ännu</p>
  );

  const productsElement = cart.map((product) => {
    return (
      <div key={product.id} className="product-container">
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
            onClick={() => removeFromCart(product.id)}
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
        <h1> Varukorg</h1>
      </div>

      <div className="products">
        <div className="flex-right">
          <button className="clear-btn" onClick={emptyCart}>
            Rensa varukorgen
          </button>
        </div>
        {productsElement}
        <div className="flex-right">
          <button>Gå till kassan</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
