import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import Login from "./pages/Login";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <Routes>
      <Route
        path="/about"
        element={
          <About
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />
        }
      />
      <Route
        path="/"
        element={
          <Main showSettings={showSettings} setShowSettings={setShowSettings} />
        }
      />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
