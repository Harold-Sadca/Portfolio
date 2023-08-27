import { Outlet } from 'react-router-dom';
import '../App.css';
import './layout.css';
import Nav from './Nav';
import ParticlesBackground from './ParticlesBackground';

const Layout = () => {
  return (
    <>
      <ParticlesBackground />
      <div className='App'>
        <Nav />
        <div className='page'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
