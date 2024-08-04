// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NewNav from './components/NewNav';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <NewNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
