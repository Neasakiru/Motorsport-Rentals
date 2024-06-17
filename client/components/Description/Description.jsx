import "./Description.css";
import { Link } from "react-router-dom";

function Description() {
  return (
    <>
      <div className="description-main">
        <div className="description-content">
          <span className="description-span">- Motorsport Rentals -</span>
          <div className="description-div">
            SpeedPsychos oferuje wynajem ekskluzywnych samochodów sportowych i
            egzotycznych. Nasza flota obejmuje najnowsze modele, zapewniając
            klientom niezapomniane chwile za kierownicą. Profesjonalna obsługa i
            bezpieczeństwo gwarantowane. Doświadcz mocy i elegancji na drodze z
            Motorsport Rentals.
          </div>
          <div className="description-links">
            <Link id="cars" to="/cars">
              <div className="overlay">
                <div className="content">
                  <span className="title">Samochody</span>
                  <span>Poznaj naszą flotę!</span>
                </div>
              </div>
            </Link>
            <Link id="about" to="/about">
              <div className="overlay">
                <div className="content">
                  <span className="title">O nas</span>
                  <span>Dowiedz się więcej na temat naszej działalności!</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Description;
