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
import TermsCondition from "./pages/TermsCondition";
import Web from "./components/Web";
import AppDev from "./components/AppDev";
import Cyber from "./components/Cyber";
import Graphics from "./components/Graphics";
import Digital from "./components/Digital";
import Ai from "./components/Ai";
import Project from "./components/ProjectMgt";
import Printing from "./components/Printing";
import Video from "./components/Video";
import Accessories from "./components/Laptop&Accessories";
import Training from "./components/Training";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
            <Route  element={<Layout />}>
              <Route path="/" element={ <Home /> } />
              <Route path="home" element={ <Home /> } />
              <Route path="about" element={ <About /> } />
              <Route path="contact" element={ <Contact /> } />
              <Route path="portfolio" element={ <Portfolio /> } />
              <Route path="solutions">
                <Route index element={<Services />} />
                <Route path="web" element={<Web />}  />
                <Route path="app" element={<AppDev />}  />
                <Route path="cyber" element={<Cyber />}  />
                <Route path="graphics" element={<Graphics />}  />
                <Route path="digital" element={<Digital />}  />
                <Route path="ai" element={<Ai />}  />
                <Route path="project" element={<Project />}  />
                <Route path="printing" element={<Printing />}  />
                <Route path="video" element={<Video />}  />
                <Route path="accessories" element={<Accessories />}  />
                <Route path="training" element={<Training />}  />
              </Route>
              <Route path="quote" element={ <RequestQuote /> } />
              <Route path="blog" element={ <Blog /> } />
              <Route path="mobile" element={ <MobileApp /> } />
              <Route path="article" element={ <Article /> } />
              <Route path="terms" element={ <TermsCondition /> } />
              <Route path="privacy" element={ <PrivacyPolicy /> } />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
     
    </div>
  );
}

export default App;
