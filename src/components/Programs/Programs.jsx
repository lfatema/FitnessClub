import "../Programs/Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* Header */}
      <div className="program-header">
        <span>Explore Our</span>
        <span className="text-stroke">Programs</span>
        <span>To Shape You</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
