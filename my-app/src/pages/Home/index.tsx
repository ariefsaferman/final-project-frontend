import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import HouseCard from "../../components/Card";
import HeaderHome from "../../components/Header";
import IHouses from "../../interfaces/IHouses";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses, HouseDispatch } from "../../store/slices/houseSlice";
import { RootState } from "../../store";
import "./index.scss";
import Navbar from "../../components/Navbar";
import FilterHouse from "../../components/FilterHouse";
import useDebounce from "../../hooks/useDebounce";

export default function HomePage() {
  const [house, setHouse] = useState<IHouses[]>([]);
  const [cookies] = useCookies(["token"]);
  const api = process.env.REACT_APP_API;
  const { houses } = useSelector((state: RootState) => state.house);
  const dispatch: HouseDispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const limit: number = 10;

  const [sortBy, setSortBy] = useState<string>("name");
  const [sortType, setSortType] = useState<string>("desc");
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce<string>(search);

  useEffect(() => {
    dispatch(fetchHouses({ page, limit, sortBy, sortType, debouncedSearch }));
  }, [dispatch, page, sortBy, sortType, debouncedSearch]);

  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      {/* <HeaderHome /> */}
      <FilterHouse
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortType={sortType}
        setSortType={setSortType}
        search={search}
        setSearch={setSearch}
      />
      <div className="wrapper">
        <div className="row g-4">
          {houses.map((house) => (
            <div className="col-lg-3" key={house.id}>
              <HouseCard house={house} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
