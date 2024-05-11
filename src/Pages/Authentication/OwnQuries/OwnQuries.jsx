import { Link } from "react-router-dom";

const OwnQuries = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.postimg.cc/gkx6Jk9R/man-with-laptop-adding-credit-card-in-bank-account-online-payments-for-purchases-and-services-vector.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none sm:text-6xl">
              Do You Want to <span className="text-violet-600">Add</span> Your
              Product <span className="text-violet-600">?</span>
            </h1>

            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Introducing our newest alternative: the [Product Name]. Elevate
              your [activity] with sleek design and advanced features.{" "}
              <br className="hidden md:inline lg:hidden" />
              Seamlessly integrate it into your routine for effortless
              [activity]. Order now and redefine your [activity] experience!a
            </p>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to='/AddQuries'>
                <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Add Queries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OwnQuries;
