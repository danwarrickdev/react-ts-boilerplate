import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { SamplePage } from "./pages/SamplePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
