import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchData from "./SearchData";

const SearchListArea = ({ setVisiblity, searchBy }) => {
  return (
    <>
      {searchBy.map((item, index) => {
        if (index >= 24) {
          return false;
        }
        return (
          <li key={index}>
            <Link to={item.link} onClick={() => setVisiblity(false)}>
              {item.title}
              {item.from ? <span> - {item.from}</span> : ""}
            </Link>
          </li>
        );
      })}
    </>
  );
};

const SearchBar = ({ visibility, setVisiblity }) => {
  const [searchList, setSearchList] = useState([]);
  const [searchFiltered, setSearchFiltered] = useState([]);

  useEffect(() => {
    setSearchList(SearchData);
  }, []);

  const getKeyword = (event) => {
    let keyword = event.target.value.toLowerCase();
    let filtered = searchList.filter((item) => {
      return item.title.toLowerCase().indexOf(keyword) > -1;
    });
    setSearchFiltered(filtered);
  };

  return (
    <>
      <div
        className={
          "simplePopup-bg searchPopup-bg " + (visibility ? "show-this" : "")
        }
      ></div>
      <div className={"search-popup " + (visibility ? "show-this" : "")}>
        <div className="searchInputArea">
          <input
            type="text"
            placeholder="Search By Keyword"
            onChange={(e) => getKeyword(e)}
          />
          <span className="popupCross" onClick={() => setVisiblity(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <div className="searchData">
          <ul>
            <SearchListArea
              searchBy={
                searchFiltered.length === 0 ? searchList : searchFiltered
              }
              setVisiblity={setVisiblity}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
