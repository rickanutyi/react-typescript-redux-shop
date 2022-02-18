import React, { FC, useContext } from "react";
import "./style/Header.css";
import Logo from "../../assets/icons/dish.png";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";

const Header: FC = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  function goToProfile() {
    if (user) {
      if (user.email === "erachynybaev@gmail.co") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } else {
      navigate("/login");
    }
  }
  return (
    <div className="header">
      <div className="container">
        <div className="header_top_menu">
          <div className="header_top-left">
            <ul>
              <li>Каталог</li>
              <li>О компании</li>
              <li>Контакты</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Блог</li>
            </ul>
          </div>
          <div className="header_top-right">
            <ul>
              <li>Доставка с 8:00 до 23:00</li>
              <li>+7(800) 800-80-80</li>
              <li>EN</li>
              <li>KG</li>
              <li>RU</li>
            </ul>
          </div>
        </div>
        <div className="header_main">
          <div className="logo" onClick={() => navigate("/")}>
            <img width="50" src={Logo} alt="" />
            <h2>BANANA</h2>
          </div>
          <div className="btn_catalog">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                fill="#1040e2"
              />
              <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
            </svg>
            Каталог
          </div>
          <div className="search_inp">
            <input type="text" />
            <div className="search_icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z" />
              </svg>
            </div>
          </div>
          <div className="user_actions">
            {/* user room */}
            <div className="user" onClick={goToProfile}>
              {" "}
              <svg
                className="user"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
              </svg>
            </div>
            {/* basket */}
            <div className="basket">
              <svg
                className="basket"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
              </svg>
              <span>0</span>
            </div>
            {/* favorites */}
            <div className="fav">
              {" "}
              <svg
                className="fav"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M12 0l3.668 8.155 8.332 1.151-6.064 5.828 1.48 8.866-7.416-4.554-7.417 4.554 1.481-8.866-6.064-5.828 8.332-1.151z" />
              </svg>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
