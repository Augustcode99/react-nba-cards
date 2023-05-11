import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { data } from "./assets/data.js";

function App() {
  return (
    <div className="grid place-content-center">
      <Header />
      <SearchBar />
      <div className="grid gap-4 grid-rows-3 grid-cols-4 w-10/12  border-4 border-solid border-emerald-950">
        {data.map((item) => {
          const { name, img, statistics } = item;
          return <Card name={name} img={img} statistics={statistics} />;
        })}
      </div>
    </div>
  );
}

export default App;
