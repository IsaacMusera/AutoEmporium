import {createBrowserRouter,} from "react-router-dom";
import Home from './pages/Home';
import LandingPage from "./pages/Landingpage";
import Contactpage from "./pages/Contactpage";
import AboutPage from "./pages/Aboutpage";
  
export  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: 'about',
      element: <AboutPage />
    },
    
    {
      path: 'catalogue',
      element: <Home />
    },
    {
      path: 'contact',
      element: <Contactpage />
    },
  
  ]);
  