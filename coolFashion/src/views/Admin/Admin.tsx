import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { useEffect, useState } from "react";
import { IContactMessage } from "../../Interfaces/Interfaces";

const Admin = () => {
  const [contactMsg, setContactMsg] = useState<IContactMessage[]>([]);

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

  const messageListElement = contactMsg.map((msg) => {
    return (
      <>
        <p key={msg.id}>{msg.message}</p>
        <br />
      </>
    );
  });
<<<<<<< HEAD
  return (
    <>
      <h1>Jag är ADMIN</h1>
=======

  //   Ostbågar är bra
  
  return (
    <>
      <h1>Jag är ADMIN</h1>

      <div>
        <h2>Kontakt meddelanden</h2>
        {messageListElement}
      </div>
>>>>>>> bcd06d00a2dbc5a7762e08a0448d95d852948167
    </>
  );
};

export default Admin;
