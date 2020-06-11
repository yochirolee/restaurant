import React,{useState,createContext} from 'react';


export const ProductsInCartContext=createContext();

export const ProductsInCardProvider=(props)=>{
 
  

    const [productsInCart,setProductsInCart]=useState([
      
    ]);


    return (
        <ProductsInCartContext.Provider value={[productsInCart,setProductsInCart]}>
            {props.children}
        </ProductsInCartContext.Provider>
    )



}