import React, { useContext } from "react";
import { scontext } from "../Context/scontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/breadcrum";
import Productdisplay from "../components/productdisplay/productdisplay";
import Descriptionbox from "../components/descriptionbox/descriptionbox";
import Relatedproducts from "../components/relatedproducts/relatedproducts";
const Product = () => {
  const { all_product } = useContext(scontext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Descriptionbox />
      <Relatedproducts />
    </div>
  );
};

export default Product;
