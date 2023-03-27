import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card item={item} key={item.title} />;
  });

  return (
    <main>
      <div className="main-container">
        <Header />
        {cards}
      </div>
    </main>
  );
}
