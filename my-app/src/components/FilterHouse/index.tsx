import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import "./style.scss";

type Props = {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  sortType: string;
  setSortType: (sortType: string) => void;
  search: string;
  setSearch: (search: string) => void;
};

export default function FilterHouse(props: Props) {
  return (
    <div
      className="filter__house d-flex  flex-wrap align-items-center justify-content-between"
      style={{
        backgroundColor: "#dbd5d5   ",
        height: "6rem",
        borderRadius: "2rem",
      }}
    >
      <div className="filter__house__show  align-items-center">
        <label htmlFor="sort" className="sort">
          Sort
        </label>
        <select
          className="form-select"
          onChange={(e) => {
            e.preventDefault();
            props.setSortType(e.target.value);
          }}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <div className="filter__house_sort gx-0 gy-2">
        <div className=" align-items-center">
          <label htmlFor="filter" className="m-0 me-3 filter">
            Filter
          </label>
          <select
            className="form-select me-2"
            onChange={(e) => {
              e.preventDefault();
              props.setSortBy(e.target.value);
            }}
          >
            <option value="name">Name</option>
            <option value="price_per_night">Price</option>
            <option value="city_id">City</option>
          </select>
        </div>
      </div>
      <div className="col-lg-2">
        <label htmlFor="filter" className="m-0 me-3 search">
          Search
        </label>
        <div className="input-group filter__search">
          <span className="input-group-text border-end-0">
            <SearchIcon />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search"
            onChange={(e) => {
              e.preventDefault();
              props.setSearch(e.target.value ? e.target.value : "");
            }}
          />
        </div>
      </div>
      <div className="col-lg-2">
        <label htmlFor="checkInDate" className="m-0 me-3 filter">
          Check In
        </label>
        <input type="date" />
      </div>
      <div className="col-lg-2">
        <label htmlFor="checkOutDate" className="m-0 me-3 filter">
          Check Out
        </label>
        <input type="date" />
      </div>
    </div>
  );
}
