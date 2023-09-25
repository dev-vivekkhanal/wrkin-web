// assets
import group4 from "../../assets/landing/group_4.png";

const Section4 = () => {
  // local variable
  const section_data = {
    heading: "Human Resource Management (HRM)",
    desc: "For businesses, Wrkin.app simplifies HR processes by providing tools to manage employee records, handle leave requests, conduct performance evaluations, and oversee other HR-related functions. These HRM features are seamlessly integrated into the platform, consolidating all HR-related activities within one comprehensive and user-friendly interface. This streamlines HR operations and ensures compliance with HR protocols and regulations.",
    img: group4,
  };
  return (
    <section className="px-5 mt-32 md:mt-0 pb-96 overflow-x-hidden sm:overflow-visible">
      <h1 className="text-3xl ">{section_data?.heading}</h1>
      <p className="text-sm  max-w-[80%] md:max-w-[50%] text-dark-200 mt-16 ">
        {section_data?.desc}
      </p>

      <img
        src={section_data?.img}
        alt="group4"
        className="scale-[2] max-w-xs md:max-w-lg relative top-40 md:top-80 left-[-80px]"
      />
    </section>
  );
};

export default Section4;
