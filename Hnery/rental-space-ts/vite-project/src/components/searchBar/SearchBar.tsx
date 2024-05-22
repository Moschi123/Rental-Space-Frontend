import { useState } from "react";
import "./searchbar.scss";

const types: string[] = ["buy", "rent"];

interface Query {
  type: string;
  location: string;
  minPrice: number;
  maxPrice: number;
}

function SearchBar() {
  const [query, setQuery] = useState<Query>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  return (
    <div className="searchBar">
      <div className="type"></div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
