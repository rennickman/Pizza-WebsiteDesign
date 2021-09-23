import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./Components/Hero";
import Products from "./Components/Products";
import { GlobalStyle } from "./GlobalStyles";
import { productData } from './Components/Products/data';


function App() {

    return (
        <Router>
            <GlobalStyle />
            <Hero />
            <Products heading='Choose your favorite' data={productData} />
        </Router>
    );
};

export default App;
