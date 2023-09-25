// assets
import phone3 from "../../assets/landing/phone_3.png";

const Section3 = () => {
  // local variable
  const section_data = {
    heading: "Task Management",
    desc: "  A standout feature of Wrkin.app is its in-chat task management capabilities. Users can effortlessly assign tasks, set priorities, and monitor task progress, all within the confines of chat conversations. This unique and intuitive approach streamlines project management, ensuring that critical tasks are closely tied to relevant discussions. It mitigates the risk of tasks falling through the cracks and fosters a culture of accountability and efficiency.",
    img: phone3,
  };
  return (
    <section className="px-5  text-right -mt-64 md:mt-64 ">
      <h1 className="text-3xl ">{section_data?.heading}</h1>
      <p className="text-sm  max-w-[80%] md:max-w-full text-dark-200 mt-16 ml-auto">
        {section_data?.desc}
      </p>

      <img
        src={section_data?.img}
        alt="phone3"
        className=" mt-20 ml-auto md:w-full md:max-w-xs"
      />
    </section>
  );
};

export default Section3;
