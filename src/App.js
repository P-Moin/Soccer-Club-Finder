import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClubsPage from "./ClubsPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Find Soccer Clubs Near You</h1>
        <Link
          to="/clubs"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Get Started
        </Link>

        <Routes>
          <Route path="/clubs" element={<ClubsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
