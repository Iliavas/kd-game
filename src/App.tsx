import React from 'react';
import { TestCompletion } from './screens/TestCompletion/TestCompletion';
import {MainScreen} from "./screens/MainScreen/MainScreen"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return <div style={{marginTop:"50px"}}>
    <Router>
      <Routes>
        <Route path="/test/:id" element={<TestCompletion></TestCompletion>}>
          
        </Route>
        <Route path="/" element={<MainScreen></MainScreen>}>
        </Route>
      </Routes>
    </Router>
  </div>
}

export default App;
