import React from "react";
import "./index.scss";
import sideImage from "../../assets/login.jpg";

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function Layout(props: Props) {
  return (
    <div className="container">
      <div className="row vh-100">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div className="form__content">
            <h1 className="title text-center">{props.title}</h1>
            <h5 className="subtitle text-center mb-5">{props.subtitle}</h5>
            {props.children}
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img src={sideImage} alt="login" className="form__image" />
        </div>
      </div>
    </div>
  );
}
