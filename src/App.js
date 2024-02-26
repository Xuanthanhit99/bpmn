import './App.css';
import "design_system/styles.css";
import BpmnView from './diagramViewer'
import ContextProvider from './context/index'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <ContextProvider>
      <Routes>
      <Route path="/" element={<BpmnView />} />
      <Route path=":userId" element={<BpmnView />} />
    </Routes>
    </ContextProvider>
  );
}

export default App;
