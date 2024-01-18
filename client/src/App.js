import React from "react";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import HussainDevelopers from "./Components/Hussain_Developers";
import AllUser from "./Components/AllUser";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HussainDevelopers />} />
        <Route exact path="/all" element={<AllUser />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;
