import { useState } from "react";
import "./filter.scss";

function Filter() {
  const [showFilters, setShowFilters] =useState(false);

  const toggleFilters=()=>{
    setShowFilters(!showFilters)
  };
  return (
    <div className="filter">
      <h1>
        Resultado <b>"Argentina"</b>
      </h1>
      <div className="top">
            <div className="item">
              <label htmlFor="city">Locacion</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Locacion"
              />
            </div>
          </div>
      <div className="toggle-button" onClick={toggleFilters}>
        <button>{showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}</button>
      </div>
      
      {showFilters && (

        <div className="filters">
        
          <div className="bottom">
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" id="type">
                <option value="">any</option>
                <option value="buy">Comprar</option>
                <option value="rent">Alquilar</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select name="property" id="property">
                <option value="">any</option>
                <option value="apartment">Apartment</option>
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
                placeholder="0"
              />
            </div>
            <div className="item">
              <label htmlFor="maxPrice">Max Price</label>
              <input
                type="text"
                id="maxPrice"
                name="maxPrice"
                placeholder="0"
              />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Habitaciones</label>
              <input
                type="text"
                id="bedroom"
                name="bedroom"
                placeholder="0"
              />
            </div>
            <button>
              <img src="/search.png" alt="" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;