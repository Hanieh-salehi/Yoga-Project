import HeaderMenu from "../components/HeaderMenu";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import footerlogo from "../assets/images/footerlogo.png";
import {
  footerStyle,
  footerLogoWrapper,
  footerLogo,
  footerMenuWrapper,
  footerSocial,
  footerSocialWrapper,
} from "../helpers/style";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerLogoWrapper}>
        <img src={footerlogo} alt="" style={footerLogo} />
      </div>
      <div style={footerMenuWrapper}>
        <h3 style={{ margin: " 0px 0px 50px" }}>Quick explore</h3>
        <HeaderMenu />
        <p
          style={{
            margin: "80px 0px 30px",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          Designed by Rostam Sadiqi 2021
        </p>
      </div>
      <div style={footerSocialWrapper}>
        <p style={{ marginTop: "0px" }}>Stay Connected</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <a href="" style={footerSocial}>
            <CiTwitter />
          </a>
          <a href="" style={footerSocial}>
            <CiYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
