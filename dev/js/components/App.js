import React from 'react';
import CruiseList from "../containers/Cruise";
import Header from "../components/Header"
import Footer from "../components/Footer"
require('../../scss/style.scss');




const App = () =>(
    <div className="container">
        <Header />
        <CruiseList />
        <Footer />
    </div>
);

export default App