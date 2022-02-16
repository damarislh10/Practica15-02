import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { SeacrhScreen } from "../components/SeacrhScreen";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/search" element={<SeacrhScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
