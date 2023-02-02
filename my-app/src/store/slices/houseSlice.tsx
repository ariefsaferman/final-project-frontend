import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  ThunkDispatch,
} from "@reduxjs/toolkit";

import IHouses from "../../interfaces/IHouses";

export interface IHouseState {
  houses: IHouses[];
  houseLoading: boolean;
  houseError: string | undefined | null;
}

type Request = {
  page: number;
  limit: number;
  sortBy: string;
  sortType: string;
  debouncedSearch: string;
};

const initialState: IHouseState = {
  houses: [],
  houseLoading: false,
  houseError: null,
};

export const fetchHouses = createAsyncThunk<
  IHouses[],
  Request,
  { rejectValue: string }
>("FETCH_HOUSE", (request, { rejectWithValue }) => {
  const api = process.env.REACT_APP_API;
  const url =
    api +
    "/houses?page=" +
    request.page +
    "&limit=" +
    request.limit +
    "&sortBy=" +
    request.sortBy +
    "&sort=" +
    request.sortType +
    "&search=" +
    request.debouncedSearch;
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, requestOptions)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch houses");
      return res.json();
    })
    .then((res) => {
      if (res.data) {
        return res.data;
      }
    })
    .catch((err) => {
      return rejectWithValue(err.message);
    });
});

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHouses.pending, (state) => {
      state.houseLoading = true;
    });
    builder.addCase(fetchHouses.fulfilled, (state, action) => {
      state.houseLoading = false;
      state.houses = action.payload;
    });
    builder.addCase(fetchHouses.rejected, (state, action) => {
      state.houseLoading = false;
      state.houseError = action.payload;
    });
  },
});

export default houseSlice.reducer;
export type HouseDispatch = ThunkDispatch<IHouseState, void, AnyAction>;
