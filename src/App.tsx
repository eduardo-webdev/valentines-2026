import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ReasonsPage from "./routes/ReasonsPage";
import {
  ReasonOne,
  ReasonTwo,
  ReasonThree,
  ReasonFour,
} from "./routes/Reasons";
import BeMine from "./routes/BeMine";
import Success from "./routes/Success";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reasons" element={<ReasonsPage />} />
          <Route path="/reasons/1" element={<ReasonOne />} />
          <Route path="/reasons/2" element={<ReasonTwo />} />
          <Route path="/reasons/3" element={<ReasonThree />} />
          <Route path="/reasons/4" element={<ReasonFour />} />
          <Route path="/be-mine" element={<BeMine />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}
