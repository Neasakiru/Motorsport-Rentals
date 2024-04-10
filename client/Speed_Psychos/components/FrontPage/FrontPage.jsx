import "./FrontPage.css";
import Header from "../Header/Header";

function FrontPage() {
  return (
    <>
      <main>
        <Header />
        <div className="car-model-name">
          <img src="https://mainwebstorage.blob.core.windows.net/mediacontainers/2022-04/KE_Logo_Jesko_White_-01-01-01-01.svg" />
        </div>
      </main>
    </>
  );
}

export default FrontPage;
