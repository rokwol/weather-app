import React from "react";
// import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-4">
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Enter Location"
              className="form-control searchInput shadow-sm"
              autoComplete="off"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              className="btn searchButton shadow-sm w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
