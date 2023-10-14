import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/home/home.component';

const App = () => {
  return (
    <Routes>
      {/*when path matches this url, render this element*/}
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
