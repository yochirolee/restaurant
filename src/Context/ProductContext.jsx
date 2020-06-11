import React,{useState,createContext} from 'react';


export const ProductContext=createContext();

export const ProductProvider=(props)=>{
 
    const [products,setProducts]= useState([
        {
            id:"0",
            name: 'Pizza de Jamon',
            price: '5.90',
            ingredients: 'Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary'
        },
        {   id: "1",
            name: 'Pizza Napolitana',
            price: '4.90',
            ingredients: ' Mozzarella · Parmesan · Garlic · Rosemary'
        },
        {    id: "2",
            name: 'Pizza Chorizo',
            price: '4.90',
            ingredients: ' Chorizo · Parmesan · Garlic · Rosemary'
        },
        {    id: "3",
            name: 'Pizza de Cebolla',
            price: '4.90',
            ingredients: ' Ceboola · Mozzarella · Parmesan · Garlic · Rosemary'
        },
    ])

   

    return (
        <ProductContext.Provider value={[products,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )



}
