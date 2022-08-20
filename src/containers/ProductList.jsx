import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";
import { setProduct } from "../redux/action/productAction";

const ProductList = () => {
  const products = useSelector((state) => state);
  console.log('List  ', products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
        .catch(e => console.log('Error: ', e.message))
        console.log(response.data);
      dispatch(setProduct(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
};

export default ProductList;
