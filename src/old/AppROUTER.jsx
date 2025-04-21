import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="p-4">
      <nav className="space-x-4">
        <Link to="/" className="text-blue-500">
          Home
        </Link>
        <Link to="/about" className="text-blue-500">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
