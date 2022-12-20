import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterApp from '../components/Footer';

const Root = () => {
    return (
      <>
        <Navbar />
        <div><Outlet /></div>
        <FooterApp />
      </>
    );
  }

export default Root
