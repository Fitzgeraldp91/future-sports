import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
           <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
         {/* This is the site logo */}
          <div class="navbar-brand">
          <a class="navbar-item" href="./">
          <img src="logo192.png" alt="logo" width="28" height="28"/>
          </a>

          </div>     
            {/*Nav bar links  */}
          <div class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="./">Home</a>
              <a class="navbar-item" href="./about">About</a>
            </div>         
          </div>
        </nav>
      {/* Page Contents */}      
      <div class="container is-widescreen">
      <section class="section">

      <h1 class="title">Fitzy's Bodybuilding Consultancy Services</h1>
      <h2 class="subtitle">Perfecting mind and muscle together</h2>
      </section>
      </div>
   </div>
  );
}

export default App;

