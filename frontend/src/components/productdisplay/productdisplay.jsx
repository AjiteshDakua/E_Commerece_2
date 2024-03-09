import React, { useContext } from "react";
import "./productdisplay.css";
import star_icon from "../assets/star_icon.png";
import star_duld_icon from "../assets/star_dull_icon.png";
import { scontext } from "../../Context/scontext";

const Productdisplay = (props) => {
  const { product } = props;
  const { addtocart } = useContext(scontext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdispaly-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_duld_icon} alt="" />
          <p>(1202)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-discription">
          HRX by Hrithik Roshan Men White & Navy Blue Colourblocked Padded Jacke
        </div>
        <div className="productdisplay-right-size">
          <h1>Slect Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addtocart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-shirt ,Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latsst
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
