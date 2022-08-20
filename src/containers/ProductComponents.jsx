import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.product);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card" style={{height: 500}}>
              <div className="image">
                <img src={image} alt={title} style={{width: 260, height: 300}} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponents;
