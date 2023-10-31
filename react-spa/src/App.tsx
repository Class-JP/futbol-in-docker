import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavBar } from "./components/navbar";
import { HomePage } from "./components/home";
import { Games } from "./components/games";
import { GamesEdit } from "./components/games/edit";
import { GamesCreate } from "./components/games/create";
import { SpinnerLoader } from "./components/spinner";
import { ShowGame } from "./components/games/show";

// Components


function App() {
  return (
    <BrowserRouter>
      <div className="application-main">
        <AppNavBar></AppNavBar>
        <Suspense fallback={<SpinnerLoader/>}>
          <div className="application-content">
            <Routes>
              <Route path="/" Component={() => <HomePage></HomePage>} />
              <Route path="/games" Component={() => <Games></Games>} />
              <Route path="/games/:id" Component={() => <ShowGame></ShowGame>} />
              <Route path="/games/:id/edit" Component={() => <GamesEdit />} />
              <Route path="/games/new" Component={() => <GamesCreate />} />
            </Routes>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
