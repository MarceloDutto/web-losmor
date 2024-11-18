import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

// STYLES
import './App.css';

// COMPONENTS
import TopHeader from "./components/Header/Header";
import MainFooter from "./components/Footer/Footer";

//PAGES
import Home from "./pages/Home/Home";
import Marce from "./pages/Marce/Marce";
import Fran from "./pages/Fran/Fran";
import LosMor from "./pages/LosMor/LosMor";
import Matrimonio from "./pages/Matrimonio/Matrimonio";
import ConJuan from "./pages/ConJuan/ConJuan";
import PoshoEri from "./pages/PoshoEri/PoshoEri";


function App() {
  return (
    <BrowserRouter>
        <div className="page-container">
          <TopHeader />
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/marce" element={ <Marce /> } />
            <Route exact path="/fran" element={ <Fran /> } />
            <Route exact path="/losmor" element={ <LosMor /> } />
            <Route exact path="/matrimonio" element={ <Matrimonio /> } />
            <Route exact path="/conjuan" element={ <ConJuan /> } />
            <Route exact path="/poshoyeri" element={ <PoshoEri /> } />
          </Routes>
          <MainFooter />
        </div>
    </BrowserRouter>
  )
};

export default App;