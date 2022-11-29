import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryList = () => {
  const [pagination, setPagination] = useState(1);
  const [movies, setMovies] = useState([]);
  const url = `https://gnula.nu/wp-json/wp/v2/categories?per_page=100&page=${pagination}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data);
    });
  }, [pagination]);
  return (
    <div>
      
      <h1>Category Movies</h1>
      
      <button onClick={() => setPagination(pagination - 1)}>-</button>
      <button onClick={() => setPagination(pagination + 1)}>+</button>
      <div className="catList">
        {movies.map(function (ress, i) {
          return i < 0 ? (
            <p>cargando...</p>
          ) : (
            <div key={i} className="catItem">
            <a href={ress.link} >
              {ress.name}
            </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryList;
