// assets
import logo from "../../assets/global/logo.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full fixed bg-[#121212] z-50  transition-all ">
      <img src={logo} alt="logo" className="loading-animate" />
    </div>
  );
};

export default Loader;
