import { useEffect, useState } from "react";
import { db } from "../../../firestore-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { storage } from "../../../firestore-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import { IContactMessage } from "../../Interfaces/Interfaces";
import "./Admin.css";

const Admin = () => {
  const [contactMsg, setContactMsg] = useState<IContactMessage[]>([]);
  const [titleInput, setTitleInput] = useState("Produktnamn");
  const [descriptionInput, setDescriptionInput] = useState(
    "Beskriv produkten här"
  );
  const [categoryInput, setCategoryInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  // ----------------Databas ---------------------------
  const dbRef = db;
  const contactMsgCollectionRef = collection(dbRef, "contact");
  const productCollectionRef = collection(dbRef, "products");

  // Hämtar
  const getContactMsg = async () => {
    const contactMessagesData = await getDocs(contactMsgCollectionRef);
    setContactMsg(
      contactMessagesData.docs.map((doc) => ({
        ...(doc.data() as IContactMessage),
        id: doc.id,
      }))
    );
  };

  // Skickar upp data från formuläret
  const addNewProduct = async (url: string) => {
    await addDoc(productCollectionRef, {
      title: titleInput,
      imageUrl: url,
      description: descriptionInput,
      category: categoryInput,
    });
  };

  useEffect(() => {
    getContactMsg();
  }, []);

  const uploadImage = () => {
    if (selectedFile == undefined) {
      alert("Välj en bild på produkten att ladda upp");
      return;
    }
    const imageRef = ref(storage, `products/${selectedFile.name + v4()}`);
    uploadBytes(imageRef, selectedFile).then(() => {
      alert("Bild uppladdad! 🥓");
      getDownloadURL(imageRef).then((url) => {
        // Lägg till produkten i databasen
        addNewProduct(url);
      });
    });
  };

  //---------------- Event handelers-----------------
  const fileSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = event.target.files
      ? event.target.files[0]
      : undefined;
    setSelectedFile(file || undefined);
  };

  //  --------------- HTML Elements -----------------
  const messageListElement = contactMsg.map((msg) => {
    return <p key={msg.id}>{msg.message}</p>;
  });

  return (
    <div className="container">
      <h1>Admin</h1>
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
              <label htmlFor="title">Produktnamn</label>
              <input
                type="text"
                id="title"
                placeholder={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="images">Bilder</label>
              {/* Begränsning Man kan bara välja en fil i taget */}
              <input
                type="file"
                id="images"
                placeholder="Bilder"
                required
                onChange={fileSelectedHandler}
              />
            </div>

            <div>
              <label htmlFor="description">Beskrivning</label>
              <textarea
                id="description"
                placeholder={descriptionInput}
                maxLength={500}
                onChange={(e) => setDescriptionInput(e.target.value)}
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="category">Kategori</label>
              <select
                name="category"
                id="category"
                onChange={(e) => {
                  setCategoryInput(e.target.value);
                }}
              >
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
            </div>
            <button type="button" onClick={uploadImage}>
              Spara
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
