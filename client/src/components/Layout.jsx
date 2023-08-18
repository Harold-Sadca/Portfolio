import { Outlet } from 'react-router-dom'
import '../App.css'
import './layout.css'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className="App">
      <Nav />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout