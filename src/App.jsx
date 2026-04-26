import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SimulationPage from './pages/SimulationPage';
import DashboardPage from './pages/DashboardPage';
import { ThemeProvider } from './context/ThemeContext';
import { SimulationProvider } from './context/SimulationContext';

export default function App() {
  return (
    <ThemeProvider>
      <SimulationProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<SimulationPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
      </SimulationProvider>
    </ThemeProvider>
  );
}