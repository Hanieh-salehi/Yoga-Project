import {
  Background,
  PrimaryColor,
  SecondaryColor,
  secondaryTextColor,
} from "./colors";
export const button = {
  width: 150,
  height: 50,
  borderRadius: 10,
  border: "none",
  fontSize: "16px",
  fontWeight: "400",
  color: Background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};
export const header = {
  height: "150px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  color: PrimaryColor,
  backgroundColor: Background,
  padding: "0px 7%",
};
export const headerLogo = {
  width: 56,
  height: "auto",
  objectFit: "contain",
};
export const headerMenu = {
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "24px",
  color: PrimaryColor,
  marginRight: "50px",
  textTransform: "uppercase",
};
export const mainSection = {
  height: "calc(80vh - 150px)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: Background,
  padding: "15vh 7%",
};
export const mainSectionContentWrapper = {
  width: "41%",
  height: "calc(80vh - 150px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
};
export const mainSectionTitle = {
  fontSize: "40px",
  fontWeight: "500",
  lineHeight: "60px",
  margin: "0px 0px 30px",
  color: PrimaryColor,
};
export const mainSectioncontent = {
  fontSize: "15px",
  fontWeight: "400",
  lineHeight: "40px",
  color: PrimaryColor,
  margin: "0px 0px 30px",
};
export const mainSectionBtnWrapper = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
};
export const mainSectionbutton = {
  border: "1px solid ",
  width: 150,
  height: 50,
  borderRadius: 10,
  fontSize: "16px",
  fontWeight: "400",
  color: PrimaryColor,
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "25px",
  cursor: "pointer",
};
export const mainSectionImgWrapper = {
  position: "relative",
};
export const mainSectionGrayDots = {
  position: "absolute",
  right: "0px",
  top: "-54px",
};
export const mainSectionImg = {
  height: "calc(80vh - 150px)",
  width: "auto",
  objectFit: "contain",
  position: "relative",
  right: "62px",
};
export const classesSection = {
  height: "80vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: PrimaryColor,
  padding: "20vh 7%",
};
export const classesSectionImgWrapper = {
  position: "relative",
};
export const classesSectionBlueDots = {
  position: "absolute",
  left: "0px",
  top: "-88px",
};
export const classesSectionImg = {
  height: "80vh",
  width: "auto",
  objectFit: "contain",
  position: "relative",
  left: "62px",
};
export const classesSectionContent = {
  height: "70vh",
  display: "flex",
  flexDirection: "column",
};
export const classesSectionTitle = {
  fontSize: "44px",
  fontWeight: "700",
  color: SecondaryColor,
  margin: "0px 0px 40px",
};
export const classesSectionLinkwrapper = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  height: "auto",
};
export const classesSectionYogaMaster = {
  width: "160px",
  height: "160px",
  borderRadius: "30px",
  fontSize: "20px",
  fontWeight: "500",
  color: PrimaryColor,
  backgroundColor: Background,
  textalign: "center",
  boxShadow: "0px 10px 44px -6px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "40px",
};
export const classesSectionReliveYourLife = {
  width: "160px",
  height: "160px",
  borderRadius: "30px",
  fontSize: "20px",
  fontWeight: "500",
  color: Background,
  backgroundColor: PrimaryColor,
  textalign: "center",
  boxShadow: "0px 10px 44px -6px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50%",
};
export const classesSectionRockAndYoga = {
  width: "160px",
  height: "160px",
  borderRadius: "30px",
  fontSize: "20px",
  fontWeight: "500",
  color: Background,
  backgroundColor: PrimaryColor,
  textalign: "center",
  boxShadow: "0px 10px 44px -6px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "40px",
  marginTop: "-35%",
};
export const classesSectionFitToHealth = {
  width: "160px",
  height: "160px",
  borderRadius: "30px",
  fontSize: "20px",
  fontWeight: "500",
  color: PrimaryColor,
  backgroundColor: Background,
  textalign: "center",
  boxShadow: "0px 10px 44px -6px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15%",
};
export const teamSectionWrapper = {
  height: "100vh",
  padding: "0px 7%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
export const teamSectionTitle = {
  fontSize: "50px",
  fontWeight: "500",
  color: SecondaryColor,
  textAlign: "center",
};
export const teamSectionMemberList = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "20px",
};
export const teamSectionCart = {
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  boxShadow: "0px 10px 44px -6px rgba(0,0,0,0.1)",
};
export const teamSectionCartName = {
  fontSize: "25px",
  fontWeight: "600",
  margin: "30px 0px 2px",
};
export const teamSectionCartTitle = {
  fontSize: "19px",
  fontWeight: "400",
  color: secondaryTextColor,
};
export const teamSectionIcon = {
  fontSize: "30px",
};
export const teamSectionCartDate = {
  fontSize: "15px",
  fontWeight: "300",
  color: secondaryTextColor,
};
export const priceSectionWrapper = {
  padding: "0px 7%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
export const priceSectionTitle = {
  fontSize: "50px",
  fontWeight: "500",
  color: SecondaryColor,
  textAlign: "center",
};
export const priceSectionList = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "20px",
  textAlign: "center",
};
export const priceSectionCart = {
  width: "100%",
  padding: "50px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  boxShadow: "0px 10px 44px -6px rgba(0,0,0,0.1)",
};
export const priceSectionCartPopular = {
  width: "100%",
  padding: "50px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 10px 44px -6px rgba(0,0,0,0.1)",
};
export const priceSectionCartTitle = {
  margin: "30px 0px",
  fontSize: "30px",
  fontWeight: "500",
  textTransform: "capitalize",
};
export const priceSectionCartInformation = {
  fontSize: "70px",
  fontWeight: "700",
  textTransform: "UpperCase",
  margin: "0px",
};
export const priceSectionCartOff = {
  fontSize: "25px",
  fontWeight: "600",
  textTransform: "capitalize",
  color: secondaryTextColor,
  margin: "40px 0px",
};
export const priceSectionCartBtn = {
  width: 150,
  height: 50,
  borderRadius: 10,
  border: "none",
  fontSize: "18px",
  fontWeight: "400",
  color: PrimaryColor,
  backgroundColor: Background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};
export const priceSectionCartLink = {
  color: PrimaryColor,
  textTransform: "capitalize",
};
export const priceSectionCartTag = {
  display: "inline-flex",
  width: "100%",
  height: "65px",
  backgroundColor: Background,
  color: PrimaryColor,
  fontSize: "28px",
  fontWeight: "400",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "14px 14px 0px 0px",
};
export const questionSectionWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 350px)",
};
export const questionSection = {
  padding: "0px 50px",
  width: "800px",
  height: "150px",
  borderRadius: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 10,
  boxShadow: "0px 10px 44px -6px rgba(0,0,0,0.1)",
  textAlign: "center",
};
export const questionSectionContentWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
export const questionSectionContentTitle = {
  fontSize: "30px",
  fontWeight: "700",
};
export const questionSectionContent = {
  color: secondaryTextColor,
  fontSize: "20px",
  fontWeight: "400",
  marginTop: "10px",
};
export const footerStyle = {
  width: "100%",
  height: "350px",
  backgroundColor: Background,
  color: PrimaryColor,
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  fontSize: "30px",
  fontWeight: "700",
};
export const footerLogoWrapper = {
  gridColumn: "2/4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const footerLogo = {
  width: "120px",
  height: "120px",
  objectFit: "contain",
};
export const footerMenuWrapper = {
  gridColumn: "4/10",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
  margin: "0px 100px ",
};
export const footerSocialWrapper = {
  gridColumn: "10/12",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "end",
};
export const footerSocial = {
  fontSize: "45px",
  color: PrimaryColor,
  marginLeft: "20px",
};
