import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import queryString from "query-string";
import GetMovieByName from "../selectores/GetMovieByName";
import Cards from "./Cards";

export const SeacrhScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange, resetForm] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const startWardsFilter = GetMovieByName(searchText);
console.log(startWardsFilter)
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr />
          {
              startWardsFilter.map(movie => (
                  <Cards key={movie.id}
                  {...movie}
                  />
              ))
          }
        </div>
      </div>
    </div>
  );
};
