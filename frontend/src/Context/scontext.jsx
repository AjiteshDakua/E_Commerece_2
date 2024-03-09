import React, { createContext, useEffect, useState } from "react";
//import all_product from "../components/assets/all_product";

export const scontext = createContext(null);

const getdefaultcart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const useScontextProvider = () => {
  const [all_product, setAll_Product] = useState([]);

  const [cartitems, setcartitems] = useState(getdefaultcart());
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((Response) => Response.json())
      .then((data) => setAll_Product(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/from-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "content-Type": "application/json",
        },
        body: "",
      })
        .then((Response) => Response.json())
        .then((data) => setcartitems(data));
    }
  }, []);

  const addtocart = (itemId) => {
    setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((Response) => Response.json())
        .then((data) => console.log(data));
    }
  };

  const removefromcart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemid }),
      })
        .then((Response) => Response.json())
        .then((data) => console.log(data));
    }
  };

  const gettotalcartamount = () => {
    let totalAmount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += iteminfo.new_price * cartitems[item];
      }
    }
    return totalAmount;
  };

  const gettotalcartitems = () => {
    let totalitem = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        totalitem += cartitems[item];
      }
    }
    return totalitem;
  };

  const contextvalue = {
    gettotalcartitems,
    gettotalcartamount,
    all_product,
    cartitems,
    addtocart,
    removefromcart,
  };

  return contextvalue;
};

const ScontextProvider = (props) => {
  const contextValue = useScontextProvider();

  return (
    <scontext.Provider value={contextValue}>{props.children}</scontext.Provider>
  );
};

export default ScontextProvider;
