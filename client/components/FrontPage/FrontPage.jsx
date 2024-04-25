import "./FrontPage.css";
import Navbar from "../Navbar/Navbar";

function FrontPage() {
  return (
    <>
      <main>
        <Navbar />
        <div className="car-model-name">
          <img src="https://mainwebstorage.blob.core.windows.net/mediacontainers/2022-04/KE_Logo_Jesko_White_-01-01-01-01.svg" />
        </div>
      </main>
      <div className="test"></div>
      <div className="test2"></div>
    </>
  );
}

export default FrontPage;
