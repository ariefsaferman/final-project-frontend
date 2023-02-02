import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { ILoginFailed, LoginRequest } from "../../interfaces/ILogin";
import "./index.scss";

type Props = {
  request: LoginRequest;
  setRequest: (e: ChangeEvent<HTMLInputElement>) => void;
  error: ILoginFailed;
  setError: (error: ILoginFailed) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function LoginForm(props: Props) {
  return (
    <form className="form__login" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="email" className="fw-bold">
          Email
        </label>
        <input
          name="email"
          className="form-control form-control-lg"
          style={{ borderColor: props.error.email ? "red" : "" }}
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
          className="form-control form-control-lg"
          style={{ borderColor: props.error.password ? "red" : "" }}
          id="password"
          placeholder="••••••••••"
          onChange={(e) => {
            props.setRequest(e);
            props.setError({ ...props.error, password: "" });
          }}
        />
        <span style={{ color: "red" }}>{props.error.password}</span>
      </div>
      <button
        type="submit"
        className="btn btn-lg w-100 text-white mt-3 btn-login"
      >
        Sign In
      </button>

      <p className="text-center mt-3 fs-5">
        {" "}
        Don't have an account?{" "}
        <Link to={"/register"} className="text-decoration-none text-success">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
