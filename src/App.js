import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        {/* This is the site logo */}
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="logo" width="28" height="28" />
          </a>
        </div>
        {/* Nav bar links */}
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/about">
              About
            </a>
          </div>
        </div>
      </nav>
      {/* Page Contents */}
      <div className="container is-widescreen">
        <section className="section">
          <h1 className="title">Fitzy's Bodybuilding Consultancy Services</h1>
          <h2 className="subtitle">Perfecting mind and muscle together</h2>
          <h3 className="prices">$100 a one hour session.</h3>
          <h4 className="prices">$50 for assorted products.</h4>
          <h5 className="prices">$60 for creating programs.</h5>
          {/* <h6 className="Available Days for Sessions">Sessions times available on Monday, Tuesday, Wednesday, Thursday, Friday & Saturday are detailed below.</h6> */}
          <h7 className="Available subscriptions">Memberships are one week $60, one month $250, one year $300.</h7>

          <img src="Arnold.jpg" alt="Arnold" width="300" height="100" />
          <img src="Programs.jpg" alt="Programs" width="300" height="100" />

          <iframe width="560" height="315" src="https://www.youtube.com/embed/EliKtxSmEx8" frameborder="0" allowfullscreen></iframe>
        </section>
      </div>

      {/* Schedule Table */}
      <div className="container">
        <table className="table is-bordered">
          <thead>
            <tr>
              <th><abbr title="Position">Times</abbr></th>
              <th><abbr title="Day">Session</abbr></th>
            </tr>
          </thead>
          <tbody>
            {/* Creating links for each tab */}
            <tr>
              <th>8:00am</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>9:00am</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>10:00am</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>11:00am</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>12:00pm</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>1:00pm</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>2:00pm</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>3:00pm</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>4:00pm</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>5:00pm</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
            <tr>
              <th>6:00pm</th>
              <td><a href="#tab1">Book session</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer>
        <p>&copy; 2023 Patrick John Fitzgerald. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;





