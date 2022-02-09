import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../../store/actionCreators/products";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./AllProducts.css";
import ReactPaginate from "react-paginate";
import { ProductType } from "../../../store/reducers/types";

type Props = {
  setProduct: (arg: any) => void;
};
const AllProducts: FC<Props> = ({ setProduct }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading } = useTypedSelector((state) => state.products);

  const [productsOnePage, setProducts] = useState<ProductType[] | null>(null);

  const [page, setPage] = useState<number>(0);
  const productsPerPage = 6;
  const pagesVisited = page * productsPerPage;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
    products &&
      setProducts(
        products?.slice(pagesVisited, pagesVisited + productsPerPage)
      );
  }, [products, page]);

  function changePage({ selected }: any) {
    setPage(selected);
  }
  return (
    <div>
      <div className="all_products">
        {productsOnePage !== null
          ? productsOnePage.map((item) => (
              <div key={item.id} className="mini_card">
                <div className="product_name">{item.name}</div>
                <div
                  onClick={() => navigate(`/details/${item.id}`)}
                  className="product_image"
                >
                  <img
                    width="200px"
                    height="200px"
                    src={item.images[0]}
                    alt=""
                  />
                </div>
                <div className="actions">
                  <button onClick={() => setProduct(item)}>изменить</button>
                  <button>удалить</button>
                </div>
              </div>
            ))
          : null}
      </div>
      {products != null && (
        <ReactPaginate
          previousLabel={"назад"}
          nextLabel={"вперет"}
          pageCount={Math.ceil(products.length / 6)}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"disabledBtn"}
          activeClassName={"activeBtn"}
        />
      )}
    </div>
  );
};

export default AllProducts;
