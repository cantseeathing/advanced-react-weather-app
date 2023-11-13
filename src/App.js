import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
const API_KEY = "a8a33ec79eaa1b91cc0678875cb2b1c7";
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
    </Routes>
  );
}

export default App;
