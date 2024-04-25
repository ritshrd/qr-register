import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import St1 from "./components/St1"
import St2 from "./components/St2"
import St3 from "./components/St3"
import St4 from "./components/St4"
import St5 from "./components/St5"
import St6 from "./components/St6"
import St7 from "./components/St7"
import St8 from "./components/St8"
import Home from "./components/Home"


function App() {
  return (
    <Router basename="/">
      <div>
        <nav>
          <ul className='menu'>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/st1">St1</Link>
            </li>
            <li>
              <Link to="/st2">St2</Link>
            </li>
            <li>
              <Link to="/st3">St3</Link>
            </li>
            <li>
              <Link to="/st4">St4</Link>
            </li>
            <li>
              <Link to="/st5">St5</Link>
            </li>
            <li>
              <Link to="/st6">St6</Link>
            </li>
            <li>
              <Link to="/st7">St7</Link>
            </li>
            <li>
              <Link to="/st8">St8</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/st1" element={<St1 />} />
          <Route path="/st2" element={<St2 />} />
          <Route path="/st3" element={<St3 />} />
          <Route path="/st4" element={<St4 />} />
          <Route path="/st5" element={<St5 />} />
          <Route path="/st6" element={<St6 />} />
          <Route path="/st7" element={<St7 />} />
          <Route path="/st8" element={<St8 />} />
        </Routes>
       </div>
    </Router>
  );
}

export default App;