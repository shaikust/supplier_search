import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SupplierSearch from './pages/Admin/SupplierSearch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SupplierSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
