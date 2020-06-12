import React, { Fragment, useContext } from "react";
import "./App.css";

import { FacebookContext, FacebookProvider } from "./Context/FacebookContext";
import Init from "./components/Home/init";
/**/
function App() {
  return (
    <Fragment>
      <FacebookProvider>
        <Init />
      </FacebookProvider>
    </Fragment>
  );
}

export default App;
