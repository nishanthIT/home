

import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const FeaturedHomes = () => {
  const featuredHomesData = [
    {
      id: 1,
      imageUrl: "/images/listings/as-6.jpg",
      title: "Apartments",
      description: "22+ Properties",
    },
    {
      id: 2,
      imageUrl: "/images/listings/as-7.jpg",
      title: "Single family homes ",
      description: "40+ Properties",
    },
    {
      id: 3,
      imageUrl: "/images/listings/as-8.jpg",
      title: "Office ",
      description: "10+ Properties",
    },
    {
      id: 4,
      imageUrl: "/images/listings/as-9.jpg",
      title: "Villas ",
      description: "27+ Properties",
    },
    {
      id: 5,
      imageUrl: "/images/listings/as-6.jpg",
      title: "Apartments ",
      description: "18+ Properties",
    },
    {
      id: 6,
      imageUrl: "/images/listings/as-7.jpg",
      title: "Single family homes",
      description: "22+ Properties",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".properties_homes-next__active",
          prevEl: ".properties_homes-prev__active",
        }}
        pagination={{
          el: ".properties_homes_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {featuredHomesData.map((home) => (
          <SwiperSlide key={home.id}>
            <div className="item">
              <Link to="">
                <div className="apartment-style2 text-center mb30">
                  <div className="apartment-img">
                    <img
                    
                      className="w-100 h-100 cover"
                      src={home.imageUrl}
                      alt="homes"
                    />
                  </div>
                  <div className="apartment-content">
                    <h6 className="title mb-0">{home.title}</h6>
                    <p className="text mb-0">{home.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedHomes;
