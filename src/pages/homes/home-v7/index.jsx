import MobileMenu from "@/components/common/mobile-menu";
// import Header from "@/components/home/home-v7/Header";
import DefaultHeader from "@/components/common/DefaultHeader";
import Hero from "@/components/home/home-v7/hero";
// import Footer from "@/components/home/home-v7/footer";
import Footer from "@/components/home/home-v5/footer";

// import Partner from "@/components/common/Partner";
// import FeaturedListings from "@/components/home/home-v7/FeatuerdListings";
// import Cta from "@/components/home/home-v7/Cta";
// import InqueryForm from "@/components/home/home-v7/InqueryForm";
import HeroSlide from "@/components/home/home-v7/hero/HeroSlide";
import FeaturedHomes from "@/components/home/home-v7/FeaturedHomes";
// import Explore from "@/components/common/Explore";
// import ExploreCities from "@/components/home/home-v7/ExploreCities";
import Funfact2 from "@/components/home/home-v7/Funfact2";
// import PopularListings from "@/components/home/home-v7/PopularListings";
// import Testimonial from "@/components/home/home-v7/Testimonial";
import { Link } from "react-router-dom";
// import PropertyListing from "@/components/home/home-v7/PropertyListing";

import MetaData from "@/components/common/MetaData";
import ApartmentTypes from "@/components/home/home-v5/ApartmentTypes";

const metaInformation = {
  title: "Home v7 || Homez - Real Estate ReactJS Template",
};

const Home_V7 = () => {
  return (
    <>
    <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      {/* <Header /> */}
      <DefaultHeader/>
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V3 */}
      <section className="home-banner-style7 pt0 pb30 bgc-white">
        <div className="home-style7 maxw1600 bdrs24 position-relative mx-auto mx10-lg">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <Hero />
              </div>
              {/* End .col-xl-8 */}

              <div className="col-xl-6">
                <div className="home7-main-slider">
                  <HeroSlide />
                </div>
              </div>
              {/* End .col-xl-4 */}
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V3 */}

      {/* Our Partners */}
     
      {/* End Our Partners */}

      {/* Featured Homes */}
      <section className="pt-0 pb90 pb30-md bgc-white">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Building Better Futures</h2>
                <p className="paragraph">
                  Get some Inspirations from 800+ Properties 
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="properties_homes-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination properties_homes_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="properties_homes-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="explore-apartment-5col-slider">
                <FeaturedHomes />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Featured Homes */}

      {/* Popular Property */}
      {/* <PropertyListing/> */}
      {/* Popular Property */}

      {/* Explore Apartment Explore cities */}
      <section  className="pb90 pb30-md" >
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title">Build Your Dream Home</h2>
                <p className="paragraph">
                  what we expert in:
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ApartmentTypes />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore Explore cities */}

      {/* Our Funfact */}
      <section className="bgc-thm-light pb90 pb30-md">
        <img
         
          className="funfact-floating-img1 d-none d-lg-block "
          src="/images/resource/h7-bg-1.png"
          alt="illustration"
        />
        <img
        
          className="funfact-floating-img2 wow zoomIn d-none d-lg-block "
          src="/images/resource/h7-bg-2.png"
          alt="illustration"
        />
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6 col-xl-5 wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="cta-style6 mb30-sm">
                <h2 className="cta-title mb25">
                  More than 20 Years of Real{" "}
                  <br className="d-none d-lg-block" /> Estate Experience
                </h2>
                <p className="cta-text fz15 mb25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  <br className="d-none d-lg-block" /> do eiusmod tempor
                  incididunt.
                </p>
                <Link to="/contact">
                <a to="/contact" className="ud-btn btn-dark bdrs0">
                  Get Started <i className="fal fa-arrow-right-long" />
                </a>
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="row align-items-center">
                <Funfact2 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Funfact */}

      {/* Popular Property */}
    
      {/* Popular Property */}

      {/* Customers Testimonials */}
        
      {/* Customers Testimonials */}

      {/* Explore Apartment */}
      
      {/* End Explore Apartment */}

      {/* Real Estate Inquiry Form */}
      
      {/* Real Estate Inquiry Form */}

      {/* Our CTA */}

      {/* Our End CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V7;
