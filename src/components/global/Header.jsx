// assets
import logo from "../../assets/global/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-center items-center p-5 py-10 px-5">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
