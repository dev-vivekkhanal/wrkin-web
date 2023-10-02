// assets
import stars from "../../assets/landing/stars.svg";
import tag_line from "../../assets/landing/tag_line.png";

const Section6 = () => {
  return (
    <section className="bg-primary-main py-10 ">
      <div className="w-full min-w-[320px] max-w-[1440px] mx-auto">
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
                Coming Soon
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
  );
};

export default Section6;
