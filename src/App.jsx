import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import IntroName from "./pages/IntroName";
import IntroLocation from "./pages/IntroLocation";
import ChooseMethod from "./pages/ChooseMethod";
import PreparingAnalysis from "./pages/PreparingAnalysis";
import AnalysisMenu from "./pages/AnalysisMenu";
import Demographics from "./pages/Demographics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/name" element={<IntroName></IntroName>}></Route>
          <Route
            path="/location"
            element={<IntroLocation></IntroLocation>}
          ></Route>
          <Route
            path="/options"
            element={<ChooseMethod></ChooseMethod>}
          ></Route>
          <Route
            path="/prep"
            element={<PreparingAnalysis></PreparingAnalysis>}
          ></Route>
          <Route path="/menu" element={<AnalysisMenu></AnalysisMenu>}></Route>
          <Route path="/dem" element={<Demographics></Demographics>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
