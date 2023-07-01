import HeaderMenu from "./HeaderMenu";
import { header, button, headerLogo } from "../helpers/style";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <header style={header}>
      <div style={headerLogo}>
        <img src={Logo} alt="" />
      </div>
      <HeaderMenu />
      <button style={button}>contact us</button>
    </header>
  );
};
export default Header;
