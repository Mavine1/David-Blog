import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/" element = {<About/>} />
      </Routes>
    </BrowserRouter>
  );
}
