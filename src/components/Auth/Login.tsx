import React, { FC, useContext } from "react";
import { authContext } from "../../context/AuthContext";
import "./style/Login.css";

const Login: FC = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    emailError,
    setEmailError,
    handleSignUp,
    handleLogIn,
    user,
  } = useContext(authContext);

  console.log(user);
  return (
    <div className="login">
      <div className="container">
        <div className="login_title">Вход в личный кабинет</div>
        <form action="" className="login_form">
          <label htmlFor="">email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id="email"
          />
          <label htmlFor="">password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id="password"
          />
          <div className="login_btns">
            <button type="button" onClick={handleLogIn}>
              войти
            </button>
            <button>забыли пароль?</button>
            <button onClick={handleSignUp}>зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
