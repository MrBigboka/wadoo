import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Chatroom from "./Chatroom";
import Home from './Home';
export const UnContexte = React.createContext();

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Routes>
            <Route path="/chatroom" element={<Chatroom/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
