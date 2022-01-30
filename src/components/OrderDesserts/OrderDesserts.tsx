import React from "react";
import "./style/OrderDesserts.css";
const OrderDesserts = () => {
  return (
    <div className="order_desserts">
      <div className="container">
        <div className="order_desserts_content">
          <div className="order_desserts_title">
            <h2>Десерты на заказ</h2>
          </div>
          <div className="order_desserts_text">
            Сладкие шедеары ручной работы по рецептам нашего шеф-кондитера.
            Индивидуальные десерты, разнообразие начинок, Индивидуальный подход!
            Скидки именинникам.
          </div>
          <div className="order_desserts_btn">Узнать подробнее</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDesserts;
