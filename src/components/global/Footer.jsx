// assets
import logo from "../../assets/global/logo.svg";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-t from-[#9395f72f] to-[#121212] min-w-[320px] ">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-10 py-52">
        <img src={logo} alt="logo" />
        <p>©wrkin.app, all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
