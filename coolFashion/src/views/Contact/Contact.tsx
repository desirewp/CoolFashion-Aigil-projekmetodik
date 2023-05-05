import { useState } from "react";
import React from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("PLACEHOLDER", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    const json = await res.json();
    setStatus(json.message);
  };

  return (
    <>
      <h1>Kontakta osssssss NU!</h1>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-post</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Meddelande</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              required
            ></textarea>
          </div>
          <button type="submit">Skicka</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </>
  );
};

export default Contact;
