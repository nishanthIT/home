
import { Link } from "react-router-dom";
import React from "react";

const ApartmentTypes = () => {
  const apartmentData = [
    {
      city: "Build New",
      imageSrc: "/images/listings/city-listing-2.1.jpg",
      propertyCount: 12,
      className: "col-lg-6",
    },
    {
      city: "Home Extensions",
      imageSrc: "/images/listings/city-listing-6.1.jpg",
      propertyCount: 12,
      className: "col-6 col-lg-3",
    },
    {
      city: "New Builds",
      imageSrc: "/images/listings/city-listing-7.1.jpg",
      propertyCount: 12,
      className: "col-6 col-lg-3",
    },
    {
      city: "Basment conversions",
      imageSrc: "/images/listings/city-listing-8.1.jpg",
      propertyCount: 12,
      className: "col-6 col-lg-3",
    },
    {
      city: "Loft conversions",
      imageSrc: "/images/listings/city-listing-7.1.jpg",
      propertyCount: 12,
      className: "col-6 col-lg-3",
    },
    {
      city: "Loft conversions",
      imageSrc: "/images/listings/city-listing-1.1.jpg",
      propertyCount: 12,
      className: "col-lg-6",
    },
  ];

  return (
    <>
      {apartmentData.map((apartment, index) => (
        <div key={index} className={apartment.className}>
          <div className="feature-style1 mb30">
            <div className="feature-img">
              <img
               
                className="w-100 h-100 cover"
                src={apartment.imageSrc}
                alt="city listing"
              />
            </div>
            <div className="feature-content">
              <div className="top-area">
                <h6 className="title mb-1">{apartment.city}</h6>
                <p className="text">{apartment.propertyCount} Properties</p>
              </div>
              <div className="bottom-area">
                <Link className="ud-btn2" to="/home-v4">
                  More
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ApartmentTypes;
