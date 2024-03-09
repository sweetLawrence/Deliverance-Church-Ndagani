
import "./App.css";

import Entries from "./pages/Entries";
import Totals from "./pages/Totals";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
 
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Entries />} />
          <Route path="/totals" element={<Totals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
