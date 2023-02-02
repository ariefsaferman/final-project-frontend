import React from "react";
import NotFoundImage from "../../assets/404.png";
import "./style.scss";

export default function NotFoundPage() {
  return (
    <>
      <img src={NotFoundImage} alt="Not Found Page 404" />
    </>
  );
}
