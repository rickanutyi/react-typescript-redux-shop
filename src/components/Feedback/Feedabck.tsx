import React from "react";
import "./style/Feedback.css";

const Feedabck = () => {
  return (
    <div className="feedback">
      <div className="container">
        <div className="title">Обратная связь</div>
        <form action="" className="feedback_form">
          <div className="user_datas">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <textarea name="" id=""></textarea>
          <div className="btn_send_feedback">
            <button>отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedabck;
