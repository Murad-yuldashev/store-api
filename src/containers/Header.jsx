import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="ui pointing  menu">
      <Link to='/'>
        <a class="item active">Shopping</a>
      </Link>
      <div class="right menu">
        <div class="ui vertical animated button" tabindex="0">
          <div class="hidden content">Shop</div>
          <div class="visible content">
            <i class="shop icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
