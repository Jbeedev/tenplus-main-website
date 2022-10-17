import "./App.css";

import Navbar from "./components/Navbar";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import React from "react";
import RequestQuote from "./components/RequestQuote";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import MobileApp from "./components/MobileApp";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

const Layout = ({children}) => {
  return (<React.Fragment>
     <div className="">
        <Navbar />
      </div>
    <Outlet />
  </React.Fragment>);
}

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={ <Home /> } />
              <Route path="about" element={ <About /> } />
              {/* <Route path="contact" element={ <Contact /> } /> */}
              <Route path="portfolio" element={ <Portfolio /> } />
              <Route path="solutions" element={ <Services /> } />
              <Route path="quote" element={ <RequestQuote /> } />
              <Route path="blog" element={ <Blog /> } />
              <Route path="mobile" element={ <MobileApp /> } />
              <Route path="article" element={ <Article /> } />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
     
    </div>
  );
}

export default App;
