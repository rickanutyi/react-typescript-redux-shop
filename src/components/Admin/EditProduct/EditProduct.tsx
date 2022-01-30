import React, { FC, useEffect, useRef, useState } from "react";
import { ProductType } from "../../../store/reducers/types";
import "./style/EditProduct.css";

type Props = {
  editingProduct: ProductType | null;
};
const EditProduct: FC<Props> = ({ editingProduct }) => {
  const refinp = useRef<HTMLInputElement>(null);
  const [product, setProduct] = useState<ProductType | null>(editingProduct);
  useEffect(() => {
    if (editingProduct !== null) {
      setProduct({ ...editingProduct, images: [...editingProduct.images] });
    }
  }, [editingProduct]);
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [status, setStatus] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const [name, setName] = useState<string>("");

  //get file function
  //   async function getFile() {
  //     let inp = document.querySelector<HTMLInputElement>(".file");
  //     let images: Array<string> = []; //
  //     //
  //     for (let i = 0; i < 3; i++) {
  //       let file = inp?.files?.[i];
  //       const storageRef = ref(storage, `${file?.name}`);
  //       if (file) {
  //         const uploadTask = uploadBytesResumable(storageRef, file);
  //         uploadTask.on(
  //           "state_changed",
  //           (snapshot) => {
  //             const progress =
  //               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //             console.log("Upload is " + progress + "% done");
  //             switch (snapshot.state) {
  //               case "paused":
  //                 console.log("Upload is paused");
  //                 break;
  //               case "running":
  //                 console.log("Upload is running");
  //                 break;
  //             }
  //             // getDownloadURL(uploadTask.snapshot.ref).then((res) => {});
  //           },
  //           (error) => {
  //             console.log(22222, error.message);
  //           },
  //           () => {
  //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //               console.log("File available at", downloadURL);
  //               images.push(downloadURL);
  //               if (images.length === 3) {
  //                 return createProduct(images);
  //               }
  //             });
  //           }
  //         );
  //       }
  //     }
  //   }

  return (
    <div className="edit">
      <div className="edit_title">Изменить продукт</div>
      {product !== null ? (
        <form className="edit_form">
          <label htmlFor="">название продукта</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={product ? product.name : ""}
            type="text"
            name=""
            id=""
          />
          <label htmlFor="">описание продукта</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={product ? product.description : ""}
            type="text"
            name=""
            id=""
          />
          <label htmlFor="">цена продукта</label>
          <input
            onChange={(e) => setPrice(+e.target.value)}
            value={product ? product.price : ""}
            type="number"
            name=""
            id=""
            min={0}
          />
          {/*  */}
          <label htmlFor="category" id="category">
            категоория
          </label>
          <select name="category" id="">
            <option onClick={(e) => setCategory("drinks")} value="drinks">
              напитки
            </option>
            <option onClick={(e) => setCategory("nuts")} value="nuts">
              орехи
            </option>
            <option onClick={(e) => setCategory("ather")} value="ather">
              остальное
            </option>
          </select>
          {/*  */}
          <label htmlFor="">рейтинг</label>
          <input
            onChange={(e) => setRating(Number(e.target.value))}
            value={product ? product.rating : ""}
            type="number"
            name=""
            id=""
            min={0}
          />
          <label htmlFor="">скидка</label>
          <input
            onChange={(e) => setDiscount(+e.target.value)}
            value={product ? product.discount : ""}
            type="number"
            name=""
            id=""
            min={0}
          />
          <label htmlFor="">статус</label>
          <input
            onChange={(e) => setStatus(e.target.value)}
            value={product ? product.status : ""}
            type="text"
            name=""
            id=""
          />
          <label htmlFor="">кг</label>
          <input
            onChange={(e) => setWeight(+e.target.value)}
            value={product ? product.weight : ""}
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
          <div className="btns">
            <button>сохранить</button>
            <button>отмена</button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default EditProduct;
