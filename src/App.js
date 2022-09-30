import { Route, Routes } from "react-router-dom";
import CommentPage from "./pages/Comments/CommentPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<CommentPage />} />
      </Routes>
    </div>
  );
}

export default App;
