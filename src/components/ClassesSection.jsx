import bluedot from "../assets/images/bluedot.png";
import classesSectionimg from "../assets/images/classesSectionimg.png";
import {
  classesSection,
  classesSectionImgWrapper,
  classesSectionBlueDots,
  classesSectionImg,
  classesSectionContent,
  classesSectionTitle,
  classesSectionLinkwrapper,
  classesSectionYogaMaster,
  classesSectionReliveYourLife,
  classesSectionRockAndYoga,
  classesSectionFitToHealth,
} from "../helpers/style";

const ClassesSection = () => {
  return (
    <section style={classesSection}>
      <div style={classesSectionImgWrapper}>
        <img src={bluedot} alt="" style={classesSectionBlueDots} />
        <img src={classesSectionimg} alt="" style={classesSectionImg} />
      </div>
      <div style={classesSectionContent}>
        <h3 style={classesSectionTitle}>Our Yoga Classess</h3>
        <span style={classesSectionLinkwrapper}>
          <a href="#" style={classesSectionYogaMaster}>
            Yoga Master
          </a>
          <a href="#" style={classesSectionReliveYourLife}>
            Relive your life
          </a>
          <a href="#" style={classesSectionRockAndYoga}>
            Rock and Yoga
          </a>
          <a href="#" style={classesSectionFitToHealth}>
            Fit to health
          </a>
        </span>
      </div>
    </section>
  );
};
export default ClassesSection;
