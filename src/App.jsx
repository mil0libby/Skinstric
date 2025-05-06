import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import IntroName from "./pages/IntroName";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/name" element={<IntroName></IntroName>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
