import "./FrontPage.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
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
  );
}
export default FrontPage;
