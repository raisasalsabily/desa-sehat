import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.js"
import Plant from "./pages/Plant.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/plant" caseSensitive={false} element={<Plant />} />
      </Routes>
    </Router>
  )
}

export default App
