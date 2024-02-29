import logo from './logo.svg';
import './App.css';
import TestData from './components/TestData';
import Heading from './components/Heading';
import TestData2 from './components/TestData2';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (<BrowserRouter>
  <Heading/>
    <Routes>
      
        <Route path="/standard" element={<TestData2 />} />
        <Route path="/metric" element={<TestData />} />
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
