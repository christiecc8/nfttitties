import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main.tsx";
import './App.css';
import Header from "./components/Header";
import Background from "./Background.tsx";
import WalletContextProvider from "./contexts/WalletContextProvider";

function App() {
  return (
    <WalletContextProvider>
    <div className="relative overflow-auto min-h-full">
      <Background />
      <Router>
        <main>
          <div className="z-1 relative mt-16">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  </WalletContextProvider>
  );
}

export default App;
