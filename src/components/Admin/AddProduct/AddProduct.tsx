import {
  getDownloadURL,
  uploadBytesResumable,
  ref,
  uploadBytes,
} from "firebase/storage";
import React, { FC, useState } from "react";
import { useRef } from "react";
import { AddNewProduct } from "../../../AddDataFunctions";
import { storage } from "../../../firebase";
import "./style/AddProduct.css";

const AddProduct: FC = () => {
  const refinp = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [price, setPrice] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [status, setStatus] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  // const [images, setImages] = useState<Array<string>>([]);
  const ref2 = useRef<HTMLSelectElement>(null);
  //get images from input
  async function getFile() {
    let inp = document.querySelector<HTMLInputElement>(".file");
    let images: Array<string> = []; //
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
            // getDownloadURL(uploadTask.snapshot.ref).then((res) => {});
          },
          (error) => {
            console.log(22222, error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              images.push(downloadURL);
              if (images.length === 3) {
                return createProduct(images);
              }
            });
          }
        );
      }
    }
  }

  //create product
  async function createProduct(img: string[]) {
    let product = {
      name,
      discount,
      price,
      description,
      status,
      weight,
      rating,
      images: img,
      category: ref2.current?.value,
    };
    // console.log(images);
    AddNewProduct(product);
  }

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="add_product">
      <div onClick={() => setOpen((prev) => !prev)} className="add_title">
        Добавить продукт
      </div>
      <form
        action=""
        className={open ? "add_product_form form_active" : "add_product_form"}
      >
        <label htmlFor="">название продукта</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name=""
          id=""
        />
        <label htmlFor="">описание продукта</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          name=""
          id=""
        />
        <label htmlFor="">цена продукта</label>
        <input
          onChange={(e) => setPrice(+e.target.value)}
          value={price}
          type="number"
          name=""
          id=""
          min={0}
        />
        {/*  */}
        <label htmlFor="category" id="category">
          категоория
        </label>
        <select ref={ref2} name="category" id="">
          <option value="drinks">напитки</option>
          <option value="nuts">орехи</option>
          <option value="ather">остальное</option>
        </select>
        {/*  */}
        <label htmlFor="">рейтинг</label>
        <input
          onChange={(e) => setRating(Number(e.target.value))}
          value={rating}
          type="number"
          name=""
          id=""
          min={0}
        />
        <label htmlFor="">скидка</label>
        <input
          onChange={(e) => setDiscount(+e.target.value)}
          value={discount}
          type="number"
          name=""
          id=""
          min={0}
        />
        <label htmlFor="">статус</label>
        <input
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          type="text"
          name=""
          id=""
        />
        <label htmlFor="">кг</label>
        <input
          onChange={(e) => setWeight(+e.target.value)}
          value={weight}
          type="number"
          name=""
          id=""
          min={0}
        />
        <div className="add_image">
          <label htmlFor="file"></label>
          <input
            className="file"
            ref={refinp}
            type="file"
            name="file"
            id="file"
            multiple
          />
        </div>
        <button onClick={getFile} type="button">
          добавить
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
