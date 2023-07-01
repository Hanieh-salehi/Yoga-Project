import {
  questionSectionWrapper,
  questionSection,
  questionSectionContentWrapper,
  questionSectionContentTitle,
  questionSectionContent,
  priceSectionCartBtn,
  priceSectionCartLink,
} from "../helpers/style";

const QuestionSection = () => {
  return (
    <section style={questionSectionWrapper}>
      <div style={questionSection}>
        <span style={questionSectionContentWrapper}>
          <span style={questionSectionContentTitle}>
            Have any question about us{" "}
          </span>
          <span style={questionSectionContent}>Just drop us an email</span>
        </span>
        <button style={priceSectionCartBtn}>
          <a href="#" style={priceSectionCartLink}>
            Send Email
          </a>
        </button>
      </div>
    </section>
  );
};
export default QuestionSection;
