import { useEffect } from "react";
import { ProductDB } from "../../Classes/classes";
import "./Shoppingcart.css";

const ShoppingCart = () => {
  let cart: ProductDB[] = [];
  let updatedCart: ProductDB[] = [];

  useEffect(() => {
    const getCart = localStorage.getItem("cartItems");
    cart = JSON.parse(getCart || "[]");
  }, []);

  const removeFromCart = (productId: string) => {
    // Vi hämtar innehåll från cartItems
    let exixtingCart = localStorage.getItem("cartItems");
    // Vi konverterar cartitems (det som lagrats) till en {}[]
    let objectArrExistingCart: ProductDB[] = JSON.parse(exixtingCart || "[]");
    // tar bort det önskade objektet från Cart

    updatedCart = objectArrExistingCart.filter(
      (cart) => cart.id !== productId
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
    <>
      <h1>varukorg</h1>
     
      <button onClick={emptyCart}>Rensa varukorgen</button>

      <div>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.imageUrl} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>

              <div>
              <button onClick={()=>removeFromCart(product.id)}>Ta bort från varukorgen</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShoppingCart;
