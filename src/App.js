import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectboxState from "./pages/SelectboxState";
import ClickedPoints from "./pages/ClickedPoints";
import TodoList from "./pages/TodoList";
import Api from "./pages/Api";
import Nav from "./components/Nav";
import Test from "./pages/Test";
//================================



function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<SelectboxState/>} />
        <Route path='/clickedpoints' element={<ClickedPoints/>} />
        <Route path='/todolist' element={<TodoList/>} />
        <Route path='/api' element={<Api />} />
        <Route path='/test' element={<Test/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;




