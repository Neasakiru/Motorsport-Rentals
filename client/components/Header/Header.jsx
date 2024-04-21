import "./Header.css";

function Header() {
  return (
    <nav>
      <div id="logo">Logo</div>
      <div className="links">
        <a href="" className="models">
          <span>Samochody</span>
        </a>
        <a href="" className="about">
          <span>O nas</span>
        </a>
        <a href="" className="login">
          <span>Zaloguj się</span>
        </a>
      </div>
    </nav>
  );
}

export default Header;
