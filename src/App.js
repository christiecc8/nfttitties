import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main.tsx";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./components/Header";
import Background from "./Background.tsx";
import NFTitties from "./components/NFTitties";
import WalletContextProvider from "./contexts/WalletContextProvider";

function App() {
  return (
  <ChakraProvider>
    <WalletContextProvider>
    <div className="relative overflow-auto min-h-full">
      <Router>
        <Background />
        <main>
          <div className="z-1 relative mt-16">
            <Header />
            <Routes>
              <Route path="/mint" element={<NFTitties />}/>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  </WalletContextProvider>
  </ChakraProvider>
  );
}

export default App;
