export default function Card(props) {
  console.log(props.data[0]);
  return (
    <>
      <div className="card-container">
        <img className="card-img" src={props.data[0].imageUrl} />
        <div className="card-content">
          <div className="location-container">
            <ion-icon src="/src/images/location-sharp.svg"></ion-icon>
            <span className="location-name">{props.data[0].location}</span>
            <a
              className="location-link"
              href={props.data[0].googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>

          <h1 className="card-title">{props.data[0].title}</h1>
          <span className="card-date">
            {props.data[0].startDate} - {props.data[0].endDate}
          </span>
          <p className="card-text">{props.data[0].description}</p>
        </div>
      </div>
      <div className="border" />
    </>
  );
}
