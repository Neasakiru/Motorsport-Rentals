import "./Header.css";

function Header() {
  return (
    <nav>
      <div id="logo">Logo</div>
      <div className="links">
        <a href="" className="models">
          CARS
        </a>
        <a href="" className="about">
          ABOUT
        </a>
        <a href="" className="login">
          Zaloguj się
        </a>
      </div>
    </nav>
  );
}

export default Header;
