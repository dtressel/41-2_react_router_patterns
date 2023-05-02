import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ColorFactory from './ColorFactory';
import CreateColor from './CreateColor';
import ViewColor from './ViewColor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<ColorFactory />} />
        <Route path="/colors/new" element={<CreateColor />} />
        <Route path="/colors/:color" element={<ViewColor />} />
        <Route path="*" element={<Navigate replace to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
