import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const AddNewProduct = async (product: any) => {
  let docRef: any;
  try {
    docRef = await addDoc(collection(db, "products"), product);
  } catch (err) {
    console.log(err);
  }
};
