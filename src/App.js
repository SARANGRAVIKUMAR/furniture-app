import Cart from "./Assets/images/Bag.png"
import SearchIcon from "./Assets/images/search.png"
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="hero-container">
        <div className="navbar-container">
          <div className="navbar__logo">Panto</div>
          <div className="navbar__links">
            <span>Furniture</span>
            <span>Shop</span>
            <span>About us</span>
            <span>Contact us</span>
          </div>
          <div>
            <img src={Cart} alt="Cart" />
          </div>
        </div>
        <div className="hero-contents">
          <div className="title">
            Make your interior more
            minimalistic & modern
          </div>
          <div className="description">
            Turn your room with panto into a lot more minimalist and modern with ease and speed
          </div>
          <div className="search">
            <input placeholder="search furniture" className="input-search"/>
            <img className="search-icon" src={SearchIcon} alt="search"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
