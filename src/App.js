import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DemoV2 from "./components/DemoV2.tsx";
import CategoryPage from "./components/CategoryPage.tsx";
import './App.css';

function App() {
  return (
    <div className="text-medici-primary relative overflow-auto min-h-full">
      <Router>
        <main className="font-sans mt-16">
          <div className="z-1 relative">
            <Routes>
              <Route path="/" element={<DemoV2 />} />
              <Route path="/category/:label" element={<CategoryPage />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
