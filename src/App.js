import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import Organizations from "./pages/organization";
import Layout from "./layout";
import Assets from "./pages/assets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/organization" element={<Organizations />} />
            <Route path="/assets" element={<Assets />} />
          </Route>
          <Route path="/*" element={<h2>page not found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
