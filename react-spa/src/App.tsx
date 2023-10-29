import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavBar } from "./components/navbar";
import { HomePage } from "./components/home";

// Components


function App() {
  return (
    <BrowserRouter>
      <div className="application-main">
        <AppNavBar></AppNavBar>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="application-content">
            <Routes>
              <Route path="/" Component={() => <HomePage></HomePage>} />
            </Routes>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
