import logo from './logo.svg';
import './App.css';
// import './magic/magic.css';
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
      {/* <div className="App"> */}
      {/* <BpmnView /> */}
      {/* <BpmnElementView /> */}
      {/* </div> */}
    </ContextProvider>
  );
}

export default App;
