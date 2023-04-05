import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchResult from "../../pages/SearchResult";
import "./style.scss";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchResultHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/searchresult/${query}`);
    }
  };
  return (
    <section className="searchBar">
      <div className="container">
        <div className="row">
          <h2>Search Millions Of Games . . .</h2>
          <div className="search_wrapper">
            <form onSubmit={(e) => e.preventDefault()} className="d-flex">
              <input
                type="text"
                placeholder="Search Games . . . "
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchResultHandle}
              />
              <NavLink
                onClick={searchResultHandle}
                className={"btn serach_btn"}
              >
                Search
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
