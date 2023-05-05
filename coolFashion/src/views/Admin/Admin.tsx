import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firestore-config'
import { useEffect, useState } from 'react';

const dbRef = db;
const contactMsgCollectionRef = collection(dbRef, 'ContactMsg')
console.log(dbRef);




const [contactMsg, setContactMsg] = useState();

useEffect(() => { 
    const getContactMsg = async () => {
        const contactMessagesData = await getDocs(contactMsgCollectionRef)
        

    }
 })





const Admin = () => { 





    return(
        <>
        
        <h1>Jag är ADMIN</h1>


        </>
    )
 }

 export default Admin;

