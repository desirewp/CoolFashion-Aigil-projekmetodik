import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import { useEffect, useState } from "react";

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
  return (
    <>
      <h1>Jag är ADMIN</h1>
    </>
  );
};

export default Admin;
