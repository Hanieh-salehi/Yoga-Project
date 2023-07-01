import dot from "../assets/images/dot.png";
import photosection1 from "../assets/images/photosection1.png";
import {
  mainSection,
  mainSectionContentWrapper,
  mainSectionTitle,
  mainSectioncontent,
  button,
  mainSectionBtnWrapper,
  mainSectionbutton,
  mainSectionImgWrapper,
  mainSectionGrayDots,
  mainSectionImg,
} from "../helpers/style";

const MainSection = () => {
  return (
    <section style={mainSection}>
      <div style={mainSectionContentWrapper}>
        <p style={mainSectionTitle}>
          Yoga teaches you how to listen to your body{" "}
        </p>
        <p style={mainSectioncontent}>
          Slow movements and deep breathing increase blood flow and warm up
          muscles, while holding a pose can build strength.
        </p>
        <div style={mainSectionBtnWrapper}>
          <button style={button}>Get Started</button>
          <button style={mainSectionbutton}>Sign In</button>
        </div>
      </div>
      <div style={mainSectionImgWrapper}>
        <img src={dot} alt="" style={mainSectionGrayDots} />
        <img src={photosection1} alt="" style={mainSectionImg} />
      </div>
    </section>
  );
};

export default MainSection;
