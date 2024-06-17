import { Link } from 'react-router-dom';

function LandingPage() {
    return (
      <div style={{
        backgroundImage: `url('https://car-images.bauersecure.com/wp-images/159771/082_mercedes-amg_cla_facelift.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',                                                                                                                                                         
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ color: 'blue' }}>Welcome to AutoEmporium</h1>
        <nav>
          <ul>
            <li><Link to="/catalogue">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </nav>
      </div>
    );
  }
  export default LandingPage;