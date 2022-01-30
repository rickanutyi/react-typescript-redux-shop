import React, { useState } from "react";
import { ProductType } from "../../store/reducers/types";
import AddProduct from "./AddProduct/AddProduct";
import AllProducts from "./AllProducts/AllProducts";
import EditProduct from "./EditProduct/EditProduct";
import "./style/Admin.css";

const Admin = () => {
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(
    null
  );
  console.log(editingProduct);
  return (
    <div className="admin_page">
      <div className="container">
        <div className="admin_page_content">
          <div className="admin">Страница админа</div>
          <div className="add_new_product">
            <div className="edit_add">
              <AddProduct />
              <EditProduct editingProduct={editingProduct} />
            </div>
            <AllProducts setProduct={setEditingProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
