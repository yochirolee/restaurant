import React, { Fragment, useContext } from "react";
import "./App.css";

import { FacebookContext, FacebookProvider } from "./Context/FacebookContext";
import Init from "./components/Home/init"
/**/
function App() {
  
  return (
    <FacebookProvider> <Init/></FacebookProvider>
   
  )
}

export default App;
