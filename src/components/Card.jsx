export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <img className="card-img" src={props.item.imageUrl} />
        <div className="card-content">
          <div className="location-container">
            <ion-icon src="/src/images/location-sharp.svg"></ion-icon>
            <span className="location-name">{props.item.location}</span>
            <a
              className="location-link"
              href={props.item.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>

          <h1 className="card-title">{props.item.title}</h1>
          <span className="card-date">
            {props.item.startDate} - {props.item.endDate}
          </span>
          <p className="card-text">{props.item.description}</p>
        </div>
      </div>
      <div className="border" />
    </>
  );
}
