// assets
import group1 from "../../assets/landing/group_1.png";
const Section1 = () => {
  // local variable
  const section_data = {
    heading_part_1: (
      <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl flex-1">
        Welcome <br /> to the Future of <br />
      </h1>
    ),
    heading_part_2: (
      <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl">
        <span className="bg-primary-main inline-block p-1 px-2 font-bold">
          work
        </span>
        experiences
      </h1>
    ),
    desc: `Wrkin.app is an innovative digital platform that redefines the way professionals and businesses manage work collaboration, streamline task management, and simplify Human Resource Management (HRM). Wrkin.app offers a holistic solution designed to enhance workplace productivity, organization, and communication.`,
    cta: "Coming Soon",
    img: group1,
  };
  return (
    <section className="mt-10 relative overflow-hidden   pb-20 md:pb-0">
      <div className=" px-5 flex-1 ">
        <div className=" md:flex items-end">
          {section_data?.heading_part_1}
          <p className="text-xs lg:text-sm text-dark-200 hidden md:block md:flex-[0.3]">
            {section_data?.desc}
          </p>
        </div>
        {section_data?.heading_part_2}
      </div>

      <div className="mt-10 pl-12 px-5">
        <p className="text-sm  text-dark-200 w-[80%] md:hidden">
          {section_data?.desc}
        </p>

        <button className="bg-dark-100 text-dark-800 font-semibold px-12 py-3 md:px-24 relative active:scale-95 mt-12 md:text-lg">
          <span> {section_data?.cta}</span>
          <div className="absolute top-0 bottom-0 right-4 bg-primary-focus w-1"></div>
          <div className="absolute top-0 bottom-0 right-1 bg-primary-focus w-2"></div>
        </button>
      </div>
      <img
        src={section_data?.img}
        alt="phone1"
        className="ml-auto mt-20 md:-mt-56  z-10 relative right-[-40%] md:right-[-320px] lg:right-[-160px] xl:right-[-80px]  scale-[1.5] md:scale-[1] md:w-full md:max-w-5xl"
      />
    </section>
  );
};

export default Section1;
