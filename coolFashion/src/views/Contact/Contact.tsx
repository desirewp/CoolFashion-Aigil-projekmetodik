import { useState } from "react";
import "./Contact.css";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../firestore-config";
import { Product } from "../../Classes/classes";

const Contact = () => {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");


  const shoppingCart = [
    new Product ("Tröjor", 
                  "Jättefin tröja, värmer gott", 
                  "https://firebasestorage.googleapis.com/v0/b/coolfashion-9fd35.appspot.com/o/products%2Fkids-fluffy-rainbow-unicorn-novelty-slippers-size-9-3-multi-coloured_KSCHSLIUNIS_01_1024x1024.pngb6f06f9e-b2b3-4cfc-b82c-f50f61427702?alt=media&token=b70d73dd-e83d-463c-82be-630f5c0ba42d", 
                  "Världens bästa tröja")
  

  ]
  
    // const objToString = JSON.stringify(shoppingCart);
  
    const addToCart = () => {
      const updatedShoppingCart = [...shoppingCart, new Product("Byxor", "Fula byxor", "https://firebasestorage.googleapis.com/v0/b/coolfashion-9fd35.appspot.com/o/products%2Fkids-fluffy-rainbow-unicorn-novelty-slippers-size-9-3-multi-coloured_KSCHSLIUNIS_01_1024x1024.pngb6f06f9e-b2b3-4cfc-b82c-f50f61427702?alt=media&token=b70d73dd-e83d-463c-82be-630f5c0ba42d", "Byxa2")] 
      const uSCToString = JSON.stringify(updatedShoppingCart)
      localStorage.setItem("cart", uSCToString)
    }
  
    




  const contactCollectionRef = collection(db, "contact");

  const addNewMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    await addDoc(contactCollectionRef, { name: name, mail: mail, message: message });
    setName("");
    setMail("");
    setMessage("");
  }

  

  return (
    <>      
      <button onClick={addToCart}>Lägg i varukorg</button>
      <h1>Skriv din fråga nedan i formuläret</h1>
      <div className="contact-container">
        <form onSubmit={(e) => addNewMessage(e)}>
          <div>
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mail">E-post</label>
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Meddelande</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              required
            />
          </div>
          <button type="submit">Skicka</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
