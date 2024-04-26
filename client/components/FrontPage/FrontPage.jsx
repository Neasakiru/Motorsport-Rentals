import "./FrontPage.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <>
      <main>
        <Navbar />
        <div className="name-banner">
          <img src="https://mainwebstorage.blob.core.windows.net/mediacontainers/2022-04/KE_Logo_Jesko_White_-01-01-01-01.svg" />
          <Link to="/models/jesko">Odkryj</Link>
        </div>
      </main>
      <div className="test"></div>
      <div className="test2"></div>
    </>
  );
}

export default FrontPage;
