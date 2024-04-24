import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import St1 from "./components/St1"
import St2 from "./components/St2"
import St3 from "./components/St3"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/st1">St1</Link>
            </li>
            <li>
              <Link to="/st2">St2</Link>
            </li>
            <li>
              <Link to="/st3">St3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/st1" element={<St1 />} />
          <Route path="/st2" element={<St2 />} />
          <Route path="/st3" element={<St3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;