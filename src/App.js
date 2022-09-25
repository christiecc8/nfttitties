import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main.tsx";
import './App.css';
import Background from "./Background.tsx";
import WalletContextProvider from "./contexts/WalletContextProvider";

function App() {
  return (
    <WalletContextProvider>
    <div className="text-medici-primary relative overflow-auto h-screen">
      <Router>
        <main>
          <Background />
          <div className="z-1 relative">
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
