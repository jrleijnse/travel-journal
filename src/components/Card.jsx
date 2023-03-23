export default function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-img" role="img" aria-label="Mount Fuji" />

        <div className="card-content">
          <div className="location-container">
            <ion-icon src="/src/images/location-sharp.svg"></ion-icon>
            <span className="location-name">japan</span>
            <a className="location-link" href="">
              View on Google Maps
            </a>
          </div>

          <h1 className="card-title">Mount Fuji</h1>
          <span className="card-date">12 Jan, 2021 - 24 Jan, 2021</span>
          <p className="card-text">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
      <hr className="border" />
    </>
  );
}
