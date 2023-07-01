import { headerMenu } from "../helpers/style";

const HeaderMenu = () => {
  return (
    <div>
      <a href="#" style={headerMenu}>
        Home
      </a>
      <a href="#" style={headerMenu}>
        about
      </a>
      <a href="#" style={headerMenu}>
        classes
      </a>
      <a href="#" style={headerMenu}>
        teachers
      </a>
      <a href="#" style={headerMenu}>
        blog
      </a>
    </div>
  );
};

export default HeaderMenu;
