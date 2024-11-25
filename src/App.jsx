import "./App.css";
import Homepage from "./pages/HomePage";
import JenisPage from "./pages/JenisPage";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/JenisPage" element={<JenisPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
