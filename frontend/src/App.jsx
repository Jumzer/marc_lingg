import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import AdminLayout from "./pages/layout/AdminLayout";
import UserLayout from "./pages/layout/UserLayout";
import HomeAdmin from "./pages/HomeAdmin";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="text-white">
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<HomeAdmin />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
