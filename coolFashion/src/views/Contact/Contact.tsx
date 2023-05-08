import { useState } from "react";
import "./Contact.css";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../firestore-config";

const Contact = () => {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

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
