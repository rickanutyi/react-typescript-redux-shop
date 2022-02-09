import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { storage } from "./firebase";
import { ProductType } from "./store/reducers/types";

type ArgumentsType = [
  someFunc: (img: string[]) => void,
  inp: HTMLInputElement | null,
  flag: boolean,
  product: ProductType | boolean | null
];
export async function getFile([someFunc, inp, flag, product]: ArgumentsType) {
  let images: Array<string> = []; //

  if (flag) {
    if (inp?.files?.length === 0 && product !== true) {
      someFunc(product ? [...product?.images] : []);
      return true;
    }
  }
  //
  for (let i = 0; i < 3; i++) {
    let file = inp?.files?.[i];
    const storageRef = ref(storage, `${file?.name}`);
    if (file) {
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(22222, error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            images.push(downloadURL);
            if (images.length === 3) {
              return someFunc(images);
            }
          });
        }
      );
    }
  }
}
