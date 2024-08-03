import { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: parseInt(searchParams.get("minPrice")) || 0,
    maxPrice: parseInt(searchParams.get("maxPrice")) || 10000000000000,
    bedroom: parseInt(searchParams.get("bedroom")) || null,
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="filter">
      <h1>
        Search Results for <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>

          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            id="property"
            name="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="">Any</option>
            <option value="appartment">Appartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
            min={0}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
            min={0}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={handleChange}
            min={0}
            max={100}
            defaultValue={query.bedroom}
          />
        </div>

        <button onClick={handleFilter}>
          <img src="/search.png" alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
