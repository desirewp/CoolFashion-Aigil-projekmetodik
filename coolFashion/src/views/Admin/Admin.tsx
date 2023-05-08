import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { useEffect, useState } from "react";
import { IContactMessage } from "../../Interfaces/Interfaces";

import "./Admin.css";

const Admin = () => {
  const [contactMsg, setContactMsg] = useState<IContactMessage[]>([]);
  const [titleInput, setTitleInput] = useState("Produktnamn");
  const [descriptionInput, setDescriptionInput] = useState("Beskriv produkten här");
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const dbRef = db;
  const contactMsgCollectionRef = collection(dbRef, "contact");

  const getContactMsg = async () => {
    const contactMessagesData = await getDocs(contactMsgCollectionRef);
    setContactMsg(
      contactMessagesData.docs.map((doc) => ({
        ...(doc.data() as IContactMessage),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getContactMsg();
  }, []);

  //---------------- Event handelers-----------------
  const fileSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = event.target.files? event.target.files[0] : undefined;
    setSelectedFile(file || undefined);
  };

  //  --------------- HTML Elements -----------------
  const messageListElement = contactMsg.map((msg) => {
    return <p key={msg.id}>{msg.message}</p>;
  });

  return (
    <>
      <h1>Jag är ADMIN</h1>
      <div className="flex-row">
        {/* Kontaktmeddelanden */}
        <div className="container-frame">
          <h2>Kontakt meddelanden</h2>
          <hr />
          {messageListElement}
        </div>

        {/* Formulär */}
        <div className="container-frame">
          <h2>Lägg till ny produkt</h2>
          <hr />
          <form>
            <div>
              <label htmlFor="images">Bilder</label>
              {/* Man kan bara välja en fil i taget */}
              <input
                type="file"
                id="images"
                placeholder="Bilder"
                accept="image/x-png, image/jpeg"
                required
                onChange={fileSelectedHandler}
                />
              <button type="submit">Spara</button>
            </div>
            {/* <div>
              <label htmlFor="title">Produktnamn</label>
              <input
                type="text"
                id="title"
                placeholder={titleInput}
                // value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                required
              />
            </div> */}
{/* 
            <div>
              <label htmlFor="description">Beskrivning</label>
              <textarea
                id="description"
                placeholder={descriptionInput}
                maxLength={500}
                onChange={(e) => setDescriptionInput(e.target.value)}
                required
              ></textarea>
            </div> */}

            {/* <div>
              <label htmlFor="category">Kategori</label>
              <select name="category" id="category">
                <option value="" disabled>
                  Kategori
                </option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Skjortor">Skjortor</option>
                <option value="Linnen">Linnen</option>
                <option value="Jackor">Jackor</option>
                <option value="Kappor">Kappor</option>
                <option value="tröjor">Tröjor</option>
                <option value="Tennisskor">Tennisskor</option>
                <option value="Skateskor">Skateskor</option>
                <option value="Skatebrädor">Skatebrädor</option>
                <option value="Skateskydd">Skateskydd</option>
                <option value="Hjälmar">Hjälmar</option>
                <option value="Skate skirts">Skate skirts</option>
                <option value="Klänningar">Klänningar</option>
                <option value="Blusar">Blusar</option>
                <option value="Kjolar">Kjolar</option>
                <option value="Boleros">Boleros</option>
                <option value="Klackskor">Klackskor</option>
                <option value="Pyjamaser">Pyjamaser</option>
                <option value="Bikinis">Bikinis</option>
                <option value="Badbyxor">Badbyxor</option>
              </select>
            </div> */}

          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
