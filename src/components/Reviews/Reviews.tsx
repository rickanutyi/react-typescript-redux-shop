import React from "react";
import "./style/Reviews.css";

const Reviews = () => {
  let arr = [1212, 1234, 566];
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews_content">
          {arr.map((review) => (
            <div key={review} className="review_item">
              <div className="review_user_name">Арагорн</div>
              <div className="review_message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pellentesque ultrices tincidunt. Sed malesuada ipsum tellus,
                eget auctor nisl luctus vitae. Duis nec eros turpis. Sed
                convallis felis dui, sed suscipit nisi lobortis id.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
