import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className='flex h-12 items-center gap-4 px-6 shadow-xl'>
        <Link to='/' className="hover:underline">State Selector</Link>
        <Link to='/clickedpoints' className="hover:underline">Clicked Points</Link>
        <Link to='/todolist' className="hover:underline">Todo List</Link>
    </nav>
  )
}

export default Nav