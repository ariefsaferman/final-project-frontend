import React from "react";
import { City } from "../../interfaces/Cities";
import { IRegisterFailed, RegisterRequest } from "../../interfaces/IRegister";
import "./index.scss";

type Props = {
  request: RegisterRequest;
  setRequest: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  error: IRegisterFailed;
  setError: (error: IRegisterFailed) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function RegisterForm(props: Props) {
  return (
    <form className="form__register" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="email" className="fw-bold">
          Email
        </label>
        <input
          name="email"
          style={{ borderColor: props.error.email ? "red" : "" }}
          className="form-control form-control-lg"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => {
            props.setRequest(e);
            props.setError({ ...props.error, email: "" });
          }}
        />
        <span style={{ color: "red" }}>{props.error.email}</span>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="password" className="fw-bold">
          Password
        </label>
        <input
          name="password"
          type="password"
          style={{ borderColor: props.error.password ? "red" : "" }}
          className="form-control form-control-lg"
          id="password"
          placeholder="••••••••••"
          onChange={(e) => {
            props.setRequest(e);
            props.setError({ ...props.error, password: "" });
          }}
        />
        <span style={{ color: "red" }}>{props.error.password}</span>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="full_name" className="fw-bold">
          Full Name
        </label>
        <input
          name="full_name"
          style={{ borderColor: props.error.full_name ? "red" : "" }}
          className="form-control form-control-lg"
          id="full_name"
          placeholder="Enter your full name"
          onChange={(e) => {
            props.setRequest(e);
            props.setError({ ...props.error, full_name: "" });
          }}
        />
        <span style={{ color: "red" }}>{props.error.full_name}</span>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="address" className="fw-bold">
          Address
        </label>
        <input
          name="address"
          style={{ borderColor: props.error.address ? "red" : "" }}
          className="form-control form-control-lg"
          id="address"
          placeholder="Enter your address"
          onChange={(e) => {
            props.setRequest(e);
            props.setError({ ...props.error, address: "" });
          }}
        />
        <span style={{ color: "red" }}>{props.error.address}</span>
      </div>
      <label htmlFor="city_id" className="fw-bold mt-3">
        City
      </label>
      <select
        name="city_id"
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          props.setRequest(e);
          props.setError({ ...props.error, city_id: "" });
        }}
        value={City.Jakarta}
      >
        <option value={City.Jakarta}>Jakarta</option>
        <option value={City.Bogor}>Bogor</option>
        <option value={City.Depok}>Depok</option>
        <option value={City.Tanggerang}>Tanggerang</option>
        <option value={City.Bekasi}>Bekasi</option>
      </select>
      <button
        type="submit"
        className="btn btn-lg w-100 text-white mt-3 btn-register"
      >
        Sign Up
      </button>
    </form>
  );
}
