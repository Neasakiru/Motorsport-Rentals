import "./FrontPage.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <>
      <div className="frontpage-main">
        <Navbar />
        <div className="frontpage">
          <div className="name-banner">
            <img src="https://mainwebstorage.blob.core.windows.net/mediacontainers/2022-04/KE_Logo_Jesko_White_-01-01-01-01.svg" />
            <span>Koenigsegg</span>
            <Link className="discover" to="/models/jesko">
              Odkryj
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
