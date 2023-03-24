import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  return (
    <main>
      <div className="main-container">
        <Header />
        <Card data={data} />
      </div>
    </main>
  );
}
