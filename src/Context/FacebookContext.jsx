import React,{useState,createContext} from 'react';


export const FacebookContext=createContext();

export const FacebookProvider=(props)=>{

 const [facebookLogin,setFacebookLogin]=useState({
        userId:"",
        name:"example",
        email:"",
        picture:"",
        isLogin:false


    })
   

   

    return (
        <FacebookContext.Provider value={[facebookLogin,setFacebookLogin]}>
            {props.children}
        </FacebookContext.Provider>
    )



}
