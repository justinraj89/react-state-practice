import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectboxState from "./pages/SelectboxState";
import ClickedPoints from "./pages/ClickedPoints";
import TodoList from "./pages/TodoList";
import Nav from "./components/Nav";
//================================



function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<SelectboxState/>} />
        <Route path='/clickedpoints' element={<ClickedPoints/>} />
        <Route path='/todolist' element={<TodoList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;




