import React, { useState, createContext } from "react";

import pizza1 from "../assets/img/pizza-ring.jpg";
import pizza2 from "../assets/img/pizza-chorizo.jpg";
import pizza3 from "../assets/img/pizza-mixta.jpg";
import pizza4 from "../assets/img/pizza-aceitunas.jpg";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: "0",
      name: "Pizza de Jamon",
      price: "5.90",
      ingredients:
        "Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary",
      picture: pizza1,
    },
    {
      id: "1",
      name: "Pizza Napolitana",
      price: "4.90",
      ingredients: " Mozzarella · Parmesan · Garlic · Rosemary",
      picture: pizza4,
    },
    {
      id: "2",
      name: "Pizza Chorizo",
      price: "4.90",
      ingredients: " Chorizo · Parmesan · Garlic · Rosemary",
      picture: pizza2,
    },
    {
      id: "3",
      name: "Pizza de Cebolla",
      price: "4.90",
      ingredients: " Ceboola · Mozzarella · Parmesan · Garlic · Rosemary",
      picture: pizza3,
    },
    {
      id: "4",
      name: "Pizza de Cebolla",
      price: "4.90",
      ingredients: " Ceboola · Mozzarella · Parmesan · Garlic · Rosemary",
      picture: pizza3,
    },
    {
      id: "5",
      name: "Pizza de Cebolla",
      price: "4.90",
      ingredients: " Ceboola · Mozzarella · Parmesan · Garlic · Rosemary",
      picture: pizza3,
    },
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
