import bannerImage1 from "../../img/headerBanner1.png"; 
import "../Banner/Banner.css"


export const HeaderBanner1 = () => {
    return (
      <div className="banner">
        <img src={bannerImage1} alt="Banner1" className="banner-image banner1" />
      </div>
    );
  }

export default HeaderBanner1;