import React from "react";
import { createContext, useState } from "react";
import data from "../data";
export const ProductContext = createContext();
export const ProductProvider = (props) => {
  //fake products
  const allData = data;
  const [products] = useState(allData);
  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};
