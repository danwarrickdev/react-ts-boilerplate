import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { SamplePage } from './pages/SamplePage';
import { Header } from './components/Header';
import { Providers } from './providers';

const App = () => {
  return (
    <Providers>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </Providers>
  );
};

export default App;
