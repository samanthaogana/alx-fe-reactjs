import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import "./index.css";
import HomePage from "./components/HomePage";

function App() {
  return <>
  <div>
    <HomePage />
  </div>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
    </Routes>
  </Router>
  
  </>
}

export default App;
