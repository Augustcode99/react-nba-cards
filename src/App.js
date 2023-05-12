import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { data } from "./assets/data.js";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="cardContainer grid gap-12 grid-rows-3 border-4 border-solid px-10 py-5 w-9/12 rounded-3xl mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl ">
        {data
          .filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => {
            const { name, img, statistics } = item;
            return <Card name={name} img={img} statistics={statistics} />;
          })}
      </div>
    </div>
  );
}

export default App;
