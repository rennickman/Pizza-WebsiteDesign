import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Components/Navbar";
import { GlobalStyle } from "./GlobalStyles";


function App() {

    return (
        <Router>
            <GlobalStyle />
            <Navbar />
        </Router>
    );
};

export default App;
