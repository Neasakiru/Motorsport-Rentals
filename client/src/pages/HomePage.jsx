import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function HomePage() {
  return (
    <>
      <div className="frontpanel">
        <Navbar />
        <div className="overlay">
          <div className="content">
            <span>Koenigsegg Jesko</span>
            <Link className="button" to="cars/KJE1">
              Odkryj
            </Link>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="filler"></div>
        <div className="description-main">
          <div className="description-content">
            <span>- Motorsport Rentals -</span>
            <div>
              Motorsport Rentals oferuje wynajem ekskluzywnych samochodów
              sportowych i egzotycznych. Nasza flota obejmuje najnowsze modele,
              zapewniając klientom niezapomniane chwile za kierownicą.
              Profesjonalna obsługa i bezpieczeństwo gwarantowane. Doświadcz
              mocy i elegancji na drodze z Motorsport Rentals.
            </div>
          </div>
          <div className="links">
            <Button
              id="cars"
              title="Samochody"
              content="Poznaj naszą flotę"
              destination="/cars"
              height="350px"
              width="700px"
              contentHeight="25%"
            />
            <Button
              id="about"
              title="O nas"
              content="Dowiedz się więcej na temat naszej działalności!"
              destination="/about"
              height="350px"
              width="700px"
              contentHeight="25%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
