import { doc, updateDoc } from "firebase/firestore";
import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../../firebase";
import { getFile } from "../../../helpers";
import { getAllProducts } from "../../../store/actionCreators/products";
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

  const ref2 = useRef<HTMLSelectElement>(null);
  let inp = document.querySelector<HTMLInputElement>(".file2");

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
      category: ref2.current?.value,
    });
    console.log(ref2.current?.value);
    return true;
  }
  async function editProduct() {
    await getFile([update, inp, true, product]);
    dispatch(getAllProducts());
    return;
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
          <select ref={ref2} name="category" id="">
            <option value="drinks">напитки</option>
            <option value="nuts">орехи</option>
            <option value="ather">остальное</option>
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
            <button onClick={editProduct} type="button">
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
