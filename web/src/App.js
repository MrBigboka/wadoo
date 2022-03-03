import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Chatroom from "./Chatroom";
import Home from './Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
export const UnContexte = React.createContext();


export default function App() {

  return (
    <div className="container">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/chatroom" element={<Chatroom/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}
