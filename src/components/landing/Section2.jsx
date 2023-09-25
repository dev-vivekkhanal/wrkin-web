// assets
import phone2 from "../../assets/landing/phone_2.png";
import blurr2 from "../../assets/landing/blurr_2.png";
const Section2 = () => {
  // local variable
  const section_data = {
    heading: "Integrated Chat",
    desc: "Wrkin.app provides real-time messaging capabilities akin to popularinstant messaging applications, elevating team communication andcollaboration to new heights. The chat feature offers a user-friendlyinterface that allows team members to interact seamlessly and discusstasks, projects, and HR-related matters in a central digital space.",
    img: phone2,
    blurr: blurr2,
  };
  return (
    <section className="px-5 -mt-20 pb-32 relative overflow-hidden 2xl:overflow-visible">
      <h1 className="text-3xl ">{section_data?.heading}</h1>
      <p className="text-sm max-w-[80%] md:max-w-full text-dark-200 mt-16 "></p>
      {section_data?.desc}
      <img
        src={section_data?.img}
        alt="phone2"
        className="mt-20 w-full max-w-[14rem] md:max-w-xs"
      />

      <div className=" relative min-h-[320px] w-full md:hidden">
        <img
          src={section_data?.blurr}
          alt="blurr2"
          className="scale-[1.5] absolute -right-[0%] -bottom-[10%] md:w-full md:max-w-[400px] "
        />
      </div>
    </section>
  );
};

export default Section2;
