import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.js"
import Tanaman from "./pages/Tanaman.js"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" caseSensitive={false} element={<Home />} /> */}
        {/* <Route path="/tanaman" caseSensitive={false} element={<Tanaman />} /> */}
        <Route
          path="/tanaman/:slug"
          caseSensitive={false}
          element={<Tanaman />}
        />
      </Routes>
    </Router>
  )
}

export default App
