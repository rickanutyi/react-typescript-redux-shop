import React, { useEffect, useState } from "react";
import "./style/Details.css";
import Image from "../../assets/images/tort.jpg";
import { relative } from "path/posix";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { ProductType } from "../../store/reducers/types";

const ProductDetails = () => {
  const [pos, setPos] = useState<number>(0);
  const [currrentProduct, setCurrentProduct] = useState<ProductType | any>(
    null
  );
  //
  const params = useParams();
  //
  useEffect(() => {
    getOneProduct();
  }, []);

  async function getOneProduct() {
    const docRef = doc(db, "products", `${params.id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      setCurrentProduct(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  //
  function changeImage(arg: string): void {
    switch (arg) {
      case "first":
        setPos(0);
        break;
      case "second":
        setPos(400);
        break;
      case "third":
        setPos(800);
        break;
    }
  }
  return (
    <div className="details">
      <div className="container">
        <div className="details_content">
          <div className="product_images">
            <div className="small_images">
              <img
                onClick={() => changeImage("first")}
                style={{ border: pos === 0 ? "2px solid green" : "none" }}
                width="100px"
                height="100px"
                src={currrentProduct !== null ? currrentProduct.images[0] : ""}
                alt=""
              />
              <img
                onClick={() => changeImage("second")}
                style={{ border: pos === 400 ? "2px solid green" : "none" }}
                width="100px"
                height="100px"
                src={currrentProduct !== null ? currrentProduct.images[1] : ""}
                alt=""
              />
              <img
                onClick={() => changeImage("third")}
                style={{ border: pos === 800 ? "2px solid green" : "none" }}
                width="100px"
                height="100px"
                src={currrentProduct !== null ? currrentProduct.images[2] : ""}
                alt=""
              />
            </div>
            <div className="large_images">
              <div style={{ left: `-${pos}px` }} className="slider_line">
                {currrentProduct !== null
                  ? currrentProduct.images.map((img: string, index: number) => (
                      <img
                        key={index}
                        width="400px"
                        height="400px"
                        src={img}
                        alt=""
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className="product_info">
            <div className="product_name">
              {currrentProduct !== null ? currrentProduct.name : "..."}
            </div>
            <div className="price_btn-to_basket">
              <div className="price">
                {currrentProduct !== null ? currrentProduct.price : "..."} c
              </div>
              <div className="btn-toBasket">в корзину</div>
            </div>
            <div className="delivery">доставка</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
