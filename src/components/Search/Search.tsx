import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loadSearchMovie } from "../../redux/action-creators/movie-action-creators";
import "./Search.css";
const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  function handlerSearchValue(e: any) {
    setSearch(e.target.value);
  }
  function handlerEnterDown(e: any) {
    if (e.key === "Enter") {
      dispatch(loadSearchMovie(search));
      navigate("search-results");
    }
  }
  return (
    <input
      className="search"
      placeholder="Search..."
      type={"text"}
      value={search}
      onChange={(e) => handlerSearchValue(e)}
      onKeyDown={(e) => handlerEnterDown(e)}
    ></input>
  );
};
export default Search;
