import React, { useEffect, useState } from "react";
import ErrorImage from "../../assets/error-image.png";
import IHouses from "../../interfaces/IHouses";
import { City } from "../../interfaces/Cities";
import "./style.scss";
import { Link } from "react-router-dom";

type Props = {
  house: IHouses;
};

export default function HouseCard(props: Props) {
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="card border border-0">
      <img
        style={{ objectFit: "cover", height: "389px" }}
        src={
          props.house.house_photo.length > 0
            ? props.house.house_photo[0].photo_url.includes("cloudinary")
              ? props.house.house_photo[0].photo_url
              : ErrorImage
            : ErrorImage
        }
        className="card-img-top"
        alt="house"
      />
      <div className="card-body">
        <div className="card__wrapper">
          <h5 className="card-title">{props.house.name}</h5>
          <p className="card-text text__description">
            {props.house.description}
          </p>
          <p className="card-text fw-bold mb-2 text__description">
            {props.house.city_id === 1
              ? City.Jakarta
              : props.house.city_id === 2
              ? City.Bogor
              : props.house.city_id === 3
              ? City.Depok
              : props.house.city_id === 4
              ? City.Tanggerang
              : City.Bekasi}
          </p>
          <p className="card-text">
            {" "}
            <span className="fw-bold">
              Rp {numberWithCommas(props.house.price_per_night)}
            </span>{" "}
            / night
          </p>
          <Link className="stretched-link" to={"/details"}></Link>
        </div>
      </div>
    </div>
  );
}
