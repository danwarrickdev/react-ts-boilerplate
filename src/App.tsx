import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { SamplePage } from "./pages/SamplePage";
import { Header } from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
