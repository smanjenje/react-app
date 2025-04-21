import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Componente Layout
import Home from "./pages/Home"; // Componente Home
import About from "./pages/About"; // Componente About

function App() {
  return (
    <Routes>
      {/* Layout define as rotas filhas que serão renderizadas dentro do Outlet */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />{" "}
        {/* Rota principal, renderiza Home */}
        <Route path="about" element={<About />} /> {/* Rota filha */}
      </Route>
    </Routes>
  );
}

export default App;
