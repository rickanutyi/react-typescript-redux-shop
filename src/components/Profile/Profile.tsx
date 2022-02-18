import React, { useContext } from "react";
import { authContext } from "../../context/AuthContext";

const Profile = () => {
  const { handleLogOut } = useContext(authContext);
  return (
    <div className="profile">
      <div className="container">
        <div className="profile_content">
          <div className="bought_products">
            <h2>история покупок</h2>
          </div>
          <div className="examp">тут что-то еще</div>
          <div className="log__out">
            <button onClick={handleLogOut}>выйти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
