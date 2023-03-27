import "../Reasons/Reasons.css";
import "../../App.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt=""></img>
        <img src={image2} alt=""></img>
        <img src={image3} alt=""></img>
        <img src={image4} alt=""></img>
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span class="text-stroke">why </span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>Over 140+ Expert Coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 Free program for new members</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable partners</span>
          </div>
        </div>

        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          Our Partners
        </span>
        <div id="partner">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
