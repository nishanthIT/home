// import AdvanceFilterModal from "@/components/common/advance-filter";
// import HeroContent from "./HeroContent";

import Category from "./Category";
import VideoBox from "./VideoBox";

const Hero = () => {
  return (
    <>
      <div className="inner-banner-style4">
        <h2 className="hero-title animate-up-1">
        Experience Our Expert <br className="d-none d-md-block" /> Property Maintenance Services 
      
        </h2>
        <p className="hero-text fz15 animate-up-2">
          From as low as £10 per day with limited time offer discounts
        </p>

        <div className="home4-floatin-img">
          {/* <img
          
            className="img-1 spin-left d-none d-xl-block contain"
            src="/images/about/element-10.png"
            alt="image"
          /> */}
          <img
           
            style={{ objectFit: "contain" }}
            className="img-2 bounce-y d-none d-xl-block"
            src="/images/about/element-9.png"
            alt="image"
          />
          <VideoBox />
        </div>
        {/* <HeroContent /> */}
        <h4>We Service For</h4>
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        > 
          
          {/* <AdvanceFilterModal /> */}
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
        
      <Category />
    </>
  );
};

export default Hero;
