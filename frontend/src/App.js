import './App.css';
import ViewPage from './component/ViewPage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './component/Dashboard';
import BoardView from './component/BoardView';
import ListView from './component/ListView';
import CalendarView from './component/CalendarView';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<ViewPage view={<ListView/>} index={1}/>} />
      <Route path='/ListView' element={<ViewPage view={<ListView/>} index={1}/>} />
      <Route path='/Board' element={<ViewPage index={3} view={<BoardView/>}/>} />
      <Route path='/Calendar' element={<ViewPage index={2} view={<CalendarView/>}/>} />
      <Route path='/Dashboard' element={<ViewPage index={4} view={<Dashboard/>}/>} />

      </Routes>
    </div>
    <div></div>
    
    </BrowserRouter>
  );
}

export default App;
