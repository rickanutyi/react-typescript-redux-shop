import React from "react";
import { Flex } from "../../StyledComponents/Blocks";
import "./style/Footer.css";
import Logo from "../../assets/icons/dish.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="container">
        <Flex>
          <div className="footer_content">
            <ul>
              <li>О магазине</li>
              <li>Адреса магазинов</li>
              <li>Акции и скидки</li>
              <li>Как закказать</li>
            </ul>
            <ul>
              <li>Покупателям</li>
              <li>Личный кабинет</li>
              <li>Мои заказы</li>
              <li>Политика возврата</li>
            </ul>
            <ul>
              <li>Информация</li>
              <li>Политика кофеденциальгости</li>
              <li>Пользовательское соглашение</li>
            </ul>
          </div>
        </Flex>
        <div
          style={{ marginTop: "100px" }}
          className="logo"
          onClick={() => navigate("/")}
        >
          <img width="50" src={Logo} alt="" />
          <h2>BANANA</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
