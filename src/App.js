import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UserPage from './pages/Users/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserPage />} />
    </Routes>
  );
}

export default App;
