import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { db, storage } from "../../../firebase";
import { getProducts } from "../../../store/actionCreators/products";
import { ProductType } from "../../../store/reducers/types";
import "./style/EditProduct.css";

type Props = {
  editingProduct: ProductType | null;
};
const EditProduct: FC<Props> = ({ editingProduct }) => {
  const refinp = useRef<HTMLInputElement>(null);
  const [product, setProduct] = useState<ProductType | null>(editingProduct);
  //dispatch
  const dispatch = useDispatch();
  //dispatch
  useEffect(() => {
    if (editingProduct !== null) {
      setProduct({ ...editingProduct, images: [...editingProduct.images] });
    }
  }, [editingProduct]);
  const [category, setCategory] = useState<string>("");

  // get file function
  async function getFile() {
    let inp = document.querySelector<HTMLInputElement>(".file2");
    let images: Array<string> = []; //
    //
    if (inp?.files?.length === 0) {
      update(product ? [...product?.images] : []);

      dispatch(getProducts());
      return;
    }
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
                update(images);
              }
            });
          }
        );
      }
    }
  }
  async function update(img: any) {
    const docRef = doc(db, "products", product ? product.id : "");
    console.log(product?.id);
    // Update the timestamp field with the value from the server
    let data = await updateDoc(docRef, {
      name: product?.name,
      discount: product?.discount,
      price: product?.price,
      description: product?.discount,
      status: product?.status,
      weight: product?.weight,
      rating: product?.rating,
      images: img,
      category,
    });
  }

  return (
    <div className="edit">
      <div className="edit_title">Изменить продукт</div>
      {product !== null ? (
        <form className="edit_form">
          <label htmlFor="">название продукта</label>
          <input
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            value={product ? product.name : ""}
            type="text"
            name=""
            id=""
          />
          <label htmlFor="">описание продукта</label>
          <input
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            value={product ? product.description : ""}
            type="text"
            name=""
            id=""
          />
          <label htmlFor="">цена продукта</label>
          <input
            onChange={(e) => setProduct({ ...product, price: +e.target.value })}
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
            onChange={(e) =>
              setProduct({ ...product, rating: +e.target.value })
            }
            value={product ? product.rating : ""}
            type="number"
            name=""
            id=""
            min={0}
          />
          <label htmlFor="">скидка</label>
          <input
            onChange={(e) =>
              setProduct({ ...product, discount: +e.target.value })
            }
            value={product ? product.discount : ""}
            type="number"
            name=""
            id=""
            min={0}
          />
          <label htmlFor="">статус</label>
          <input
            onChange={(e) => setProduct({ ...product, status: e.target.value })}
            value={product ? product.status : ""}
            type="text"
            name=""
            id=""
          />
          <label htmlFor="">кг</label>
          <input
            onChange={(e) =>
              setProduct({ ...product, weight: +e.target.value })
            }
            value={product ? product.weight : ""}
            type="number"
            name=""
            id=""
            min={0}
          />
          <div className="add_image">
            <label htmlFor="file"></label>
            <input
              className="file2"
              ref={refinp}
              type="file"
              name="file"
              id="file"
              multiple
            />
          </div>
          <div className="btns">
            <button onClick={getFile} type="button">
              сохранить
            </button>
            <button>отмена</button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default EditProduct;
