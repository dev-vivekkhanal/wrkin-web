// hooks
import { useState } from "react";
import { useEffect } from "react";
// components and pages
import Footer from "./components/global/Footer";
import Section6 from "./components/landing/Section6";
import Section5 from "./components/landing/Section5";
import Section4 from "./components/landing/Section4";
import Section3 from "./components/landing/Section3";
import Section2 from "./components/landing/Section2";
import Section1 from "./components/landing/Section1";
import Header from "./components/global/Header";
import Loader from "./components/global/Loader";

function App() {
  // local variables
  const [loading, setLoading] = useState(true);
  // loading logic
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="font-poppins min-h-screen bg-[#121212] text-white min-w-[320px] relative">
      {loading && <Loader />}
      <div className="transition-all">
        <div className="  w-full min-w-[320px] max-w-[1440px] mx-auto">
          <Header />
          <Section1 />
          <div className="md:flex">
            <Section2 />
            <Section3 />
          </div>
          <Section4 />
          <Section5 />
        </div>

        <Section6 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
