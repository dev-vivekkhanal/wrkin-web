import logo from "./assets/global/logo.svg";
import phone1 from "./assets/landing/phone_1.png";
import group1 from "./assets/landing/group_1.png";
import blurr1 from "./assets/landing/blurr_1.png";
import phone2 from "./assets/landing/phone_2.png";
import blurr2 from "./assets/landing/blurr_2.png";
import phone3 from "./assets/landing/phone_3.png";
import group3 from "./assets/landing/group_3.png";
import phone4 from "./assets/landing/phone_4.png";
import group4 from "./assets/landing/group_4.png";
import stars from "./assets/landing/stars.svg";
import tag_line from "./assets/landing/tag_line.png";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="font-poppins min-h-screen bg-[#121212] text-white min-w-[320px] relative">
      <div
        className={`flex justify-center items-center min-h-screen w-full fixed bg-[#121212] z-50 ${
          loading ? "visible" : "invisible"
        } transition-all `}
      >
        <img src={logo} alt="logo" className="loading-animate" />
      </div>

      <div className="transition-all">
        <div className="  w-full min-w-[320px] max-w-[1440px] mx-auto">
          <div className="flex justify-center items-center p-5 py-10 px-5">
            <img src={logo} alt="logo" />
          </div>
          {/* section 1 */}
          <section className="mt-10 relative overflow-hidden 2xl:overflow-visible  pb-20 md:pb-0">
            <div className=" px-5 flex-1 ">
              <div className=" md:flex items-end">
                <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl flex-1">
                  {" "}
                  Welcome <br /> to the Future of <br />
                </h1>

                <p className="text-xs lg:text-sm text-dark-200 hidden md:block md:flex-[0.3]">
                  Wrkin.app is an innovative digital platform that redefines the
                  way professionals and businesses manage work collaboration,
                  streamline task management, and simplify Human Resource
                  Management &#40; HRM &#41;. Wrkin.app offers a holistic
                  solution designed to enhance workplace productivity,
                  organization, and communication.
                </p>
              </div>
              <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="bg-primary-main inline-block p-1 px-2 font-bold">
                  work
                </span>{" "}
                experiences
              </h1>
            </div>

            <div className="mt-10 pl-12 px-5">
              <p className="text-sm  text-dark-200 w-[80%] md:hidden">
                Wrkin.app is an innovative digital platform that redefines the
                way professionals and businesses manage work collaboration,
                streamline task management, and simplify Human Resource
                Management &#40; HRM &#41;. Wrkin.app offers a holistic solution
                designed to enhance workplace productivity, organization, and
                communication.
              </p>

              <button className="bg-dark-100 text-dark-800 font-semibold px-12 py-3 md:px-24 relative active:scale-95 mt-12 md:text-lg">
                <span>Try Now</span>
                <div className="absolute top-0 bottom-0 right-4 bg-primary-focus w-1"></div>
                <div className="absolute top-0 bottom-0 right-1 bg-primary-focus w-2"></div>
              </button>
            </div>
            <img
              src={group1}
              alt="phone1"
              className="ml-auto mt-20 md:-mt-56  z-10 relative right-[-40%] md:right-[-320px] lg:right-[-160px] xl:right-[-80px]  scale-[1.5] md:scale-[1] md:w-full md:max-w-5xl"
            />
          </section>
          <div className="md:flex">
            {/* section 2 */}
            <section className="px-5 -mt-20 pb-32 relative overflow-hidden 2xl:overflow-visible">
              <h1 className="text-3xl ">Integrated Chat</h1>
              <p className="text-sm max-w-[80%] md:max-w-full text-dark-200 mt-16 ">
                Wrkin.app provides real-time messaging capabilities akin to
                popular instant messaging applications, elevating team
                communication and collaboration to new heights. The chat feature
                offers a user-friendly interface that allows team members to
                interact seamlessly and discuss tasks, projects, and HR-related
                matters in a central digital space.
              </p>

              <img
                src={phone2}
                alt="phone2"
                className="mt-20 w-full max-w-[14rem] md:max-w-xs"
              />

              <div className=" relative min-h-[320px] w-full md:hidden">
                <img
                  src={blurr2}
                  alt="blurr2"
                  className="scale-[1.5] absolute -right-[0%] -bottom-[10%] md:w-full md:max-w-[400px] "
                />
              </div>
            </section>
            {/* section 3 */}
            <section className="px-5  text-right -mt-64 md:mt-64 ">
              <h1 className="text-3xl ">Task Management</h1>
              <p className="text-sm  max-w-[80%] md:max-w-full text-dark-200 mt-16 ml-auto">
                A standout feature of Wrkin.app is its in-chat task management
                capabilities. Users can effortlessly assign tasks, set
                priorities, and monitor task progress, all within the confines
                of chat conversations. This unique and intuitive approach
                streamlines project management, ensuring that critical tasks are
                closely tied to relevant discussions. It mitigates the risk of
                tasks falling through the cracks and fosters a culture of
                accountability and efficiency.
              </p>

              <img
                src={phone3}
                alt="phone3"
                className=" mt-20 ml-auto md:w-full md:max-w-xs"
              />
            </section>
          </div>

          {/* section 4 */}
          <section className="px-5 mt-32 md:mt-0 pb-96 overflow-x-hidden sm:overflow-visible">
            <h1 className="text-3xl ">
              Human Resource Management &#40;HRM&#41;
            </h1>
            <p className="text-sm  max-w-[80%] md:max-w-[50%] text-dark-200 mt-16 ">
              For businesses, Wrkin.app simplifies HR processes by providing
              tools to manage employee records, handle leave requests, conduct
              performance evaluations, and oversee other HR-related functions.
              These HRM features are seamlessly integrated into the platform,
              consolidating all HR-related activities within one comprehensive
              and user-friendly interface. This streamlines HR operations and
              ensures compliance with HR protocols and regulations.
            </p>

            <img
              src={group4}
              alt="group4"
              className="scale-[2] max-w-xs md:max-w-lg relative top-40 md:top-80 left-[-80px]"
            />
          </section>

          {/* section 5 */}
          <section className="pb-32 -mt-64 md:-mt-96 md:flex gap-4 items-end">
            <div className="hidden md:block flex-1">
              <h3 className="block w-fit mx-auto text-3xl bg-primary-main   font-bold px-8 py-4 rotate-[-35deg]  min-w-[5.625rem] text-center mb-2">
                Task
              </h3>

              <h3 className="block w-fit mx-auto text-3xl bg-primary-main px-8 py-4 relative z-10 lg:-right-32 -rotate-6 font-bold min-w-[5.625rem] text-center">
                Calendar
              </h3>
              <h3 className="block w-fit mx-auto text-3xl bg-secondary-main text-dark-900 font-bold px-8 py-4 rotate-[35deg]  min-w-[5.625rem] text-center mb-2">
                HRMS
              </h3>

              <h3 className="block w-fit mx-auto text-3xl bg-secondary-main text-dark-900 px-8 py-4 -rotate-6 font-bold min-w-[5.625rem] text-center">
                Group
              </h3>
            </div>
            <div className="flex-1">
              <h1 className="text-[40px] md:text-[56px] font-bold px-5 ">
                Ways{" "}
                <span className="inline-block text-lg bg-primary-main px-3 py-2 -rotate-6 mx-1">
                  TO DO
                </span>{" "}
                <br />
                Management
              </h1>
              {/* ways todo management */}
              <div>
                <div className="px-5 mt-20">
                  <h2 className="text-[20.8px]  font-medium w-fit leading-loose border-b-primary-main border-b-2">
                    Direct Message a Task
                  </h2>

                  <p className="text-dark-200 text-sm my-10">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis
                  </p>

                  <div className="md:hidden">
                    <h3 className="block w-fit ml-auto text-lg bg-secondary-main text-dark-900 font-bold px-3 py-2 rotate-[35deg]  min-w-[5.625rem] text-center mb-2">
                      HRMS
                    </h3>

                    <h3 className="block w-fit ml-auto text-lg bg-primary-main px-3 py-2 -rotate-6 font-bold min-w-[5.625rem] text-center">
                      Task
                    </h3>
                  </div>
                </div>

                <div className="px-5 mt-20">
                  <h2 className="text-[20.8px]  font-medium w-fit leading-loose border-b-primary-main border-b-2">
                    Direct Message a Task
                  </h2>

                  <p className="text-dark-200 text-sm my-10">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis
                  </p>

                  <div className="md:hidden">
                    <h3 className="block w-fit ml-auto text-lg bg-secondary-main text-dark-900 font-bold px-3 py-2 rotate-[35deg]  min-w-[5.625rem] text-center mb-2">
                      HRMS
                    </h3>

                    <h3 className="block w-fit ml-auto text-lg bg-primary-main px-3 py-2 -rotate-6 font-bold min-w-[5.625rem] text-center">
                      Task
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* section 6 */}
        <section className="bg-primary-main py-10 ">
          <div className="max-w-[1440px] mx-auto">
            <div className="md:flex gap-5 items-start ">
              <div className="flex-1 ">
                <h1 className="font-bold text-[40px] lg:text-[48px] xl:text-[80px]  leading-tight px-5 ">
                  Try wrkin <br /> for 3 months <br />
                  free
                </h1>

                <p className="text-sm mt-5 px-5">
                  No contacts. No commitments. Guaranteed results.*{" "}
                </p>
                <div className="flex gap-5  items-center mt-10 px-5">
                  <button className="bg-dark-100 text-dark-800 font-semibold p-2 px-5 md:px-8 md:p-3 lg:px-16 lg:p-4   active:scale-95  text-sm md:text-lg  w-max">
                    Try Now
                  </button>

                  <div className="w-max">
                    <img src={stars} alt="star rating" />
                    <p className=" text-sm mt-1 tracking-wider">
                      5.0 Playstore Rating
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:mt-0 flex-1 ">
                <img src={tag_line} alt="tag line" className="w-full " />
              </div>
            </div>

            <p className="text-xs mt-5 px-5">
              * for qualified brands with over $1m annual Shopify revenue.
            </p>
          </div>
        </section>

        {/* footer */}
        <footer className=" bg-gradient-to-t from-[#9395f72f] to-[#121212] min-w-[320px] ">
          <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-10 py-52">
            <img src={logo} alt="logo" />
            <p>©wrkin.app, all rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
