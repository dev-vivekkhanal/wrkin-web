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
function App() {
  return (
    <div className="font-poppins min-h-screen bg-[#121212] text-white min-w-[20rem]">
      <div className=" bg-[#121212] bg-opacity-50 w-full min-w-[20rem] max-w-[90rem] ">
        <div className="flex justify-center items-center p-5 py-10 px-5">
          <img src={logo} alt="logo" />
        </div>
        {/* section 1 */}
        <section className="mt-10 relative overflow-hidden pb-20">
          <h1 className="text-3xl px-5">
            Welcome <br /> to the Future of <br />{" "}
            <span className="bg-primary-main inline-block p-1 px-2">work</span>{" "}
            experiences
          </h1>

          <div className="mt-10 pl-12 px-5">
            <p className="text-sm text-dark-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              neque ea vel expedita facere non cum consequatur tempore quas
              doloremque blanditiis quibusdam quo, et quod ullam. A eos nostrum
              quae asperiores quos reprehenderit nisi aperiam, obcaecati iste
              minima, dolore quas, numquam dolores aspernatur
            </p>

            <button className="bg-dark-100 text-dark-800 font-semibold px-12 py-3 relative active:scale-95 mt-12">
              <span>Try Now</span>

              <div className="absolute top-0 bottom-0 right-4 bg-primary-focus w-1"></div>
              <div className="absolute top-0 bottom-0 right-1 bg-primary-focus w-2"></div>
            </button>
          </div>
          <img
            src={group1}
            alt="phone1"
            className="ml-auto mt-20  z-10 relative right-[-40%] scale-[2]"
          />
        </section>
        {/* section 2 */}
        <section className="px-5 -mt-20 relative overflow-hidden">
          <h1 className="text-3xl">Professional Chat Environment</h1>
          <p className="text-sm text-dark-200 mt-16">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis
          </p>

          <img src={phone2} alt="phone2" className="mt-20" />

          <img
            src={blurr2}
            alt="blurr2"
            className="scale-[2] relative -right-[30%] -bottom-[10%]"
          />
        </section>
        {/* section 3 */}
        <section className="px-5  text-right -mt-24 ">
          <h1 className="text-3xl">Simple to use HRM System</h1>
          <p className="text-sm text-dark-200 mt-16">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis
          </p>

          <img src={phone3} alt="phone3" className=" mt-20 ml-auto " />
        </section>
        {/* section 4 */}
        <section className="px-5 mt-32 pb-96 overflow-hidden">
          <h1 className="text-3xl">Professional Chat Environment</h1>
          <p className="text-sm text-dark-200 mt-16">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis
          </p>

          <img
            src={group4}
            alt="group4"
            className="scale-[2] max-w-xs relative top-40 left-[-20%]"
          />
        </section>

        {/* section 5 */}
        <section className="pb-32 -mt-64">
          <h1 className="text-[2.5rem] font-bold px-5">
            Ways{" "}
            <span className="inline-block text-lg bg-primary-main px-3 py-2 -rotate-6 mx-1">
              TO DO
            </span>{" "}
            Management
          </h1>

          <div>
            <div className="px-5 mt-20">
              <h2 className="text-[1.3rem] font-medium w-fit leading-loose border-b-primary-main border-b-2">
                Direct Message a Task
              </h2>

              <p className="text-dark-200 text-base my-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis
              </p>

              <div className="">
                <h3 className="block w-fit ml-auto text-lg bg-secondary-main text-dark-900 font-bold px-3 py-2 rotate-[35deg]  min-w-[90px] text-center mb-2">
                  HRMS
                </h3>

                <h3 className="block w-fit ml-auto text-lg bg-primary-main px-3 py-2 -rotate-6 font-bold min-w-[90px] text-center">
                  Task
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* section 6 */}
        <section className="bg-primary-main py-10">
          <h1 className="font-bold text-[2.5rem] leading-tight px-5 ">
            Try wrkin <br /> for 3 months <br />
            free
          </h1>

          <p className="text-sm mt-5 px-5">
            No contacts. No commitments. Guaranteed results.*{" "}
          </p>
          <div className="flex gap-5 justify-center items-center mt-10 px-5">
            <button className="bg-dark-100 text-dark-800 font-semibold p-2 px-5  active:scale-95  text-sm w-max">
              Try Now
            </button>

            <div className="w-max">
              <img src={stars} alt="star rating" />
              <p className=" text-sm mt-1 tracking-wider">
                5.0 Playstore Rating
              </p>
            </div>
          </div>

          <img src={tag_line} alt="tag line" className="w-full mt-10" />

          <p className="text-xs mt-5 px-5">
            * for qualified brands with over $1m annual Shopify revenue.
          </p>
        </section>

        {/* footer */}
        <footer className="flex flex-col justify-center items-center gap-10 py-52 bg-gradient-to-t from-[#9395f72f] to-[#121212]">
          <img src={logo} alt="logo" />
          <p>©wrkin.app, all rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
