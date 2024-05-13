"react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { Link } from "react-router-dom";

const RecentQuries = () => {

  const {user} =useContext(AuthContext);
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    if(user?.email){
      fetch(`http://localhost:5000/RecentQueries?email=${user?.email}`,{credentials:'include'})
      .then((res) => res.json())
      .then((data) => setCards(data));
    }
  }, [user]);
  console.log(Cards);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-10  ">
      {Cards.map((Card) => (
        <div
          key={Card._id}
          className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <img
            className="object-cover w-full h-64"
            src={Card?.ProductImage}
            alt="Article"
          />

          <div className="p-6">
            <div>
              <div className="flex justify-between">
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {Card?.ProductName}
                </span>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {Card?.BrandName}
                </span>
              </div>
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link"
              >
                {Card?.QueryTitle}
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {Card?.text}
              </p>
            </div>
            <div className="my-4">
              <div className="flex justify-between">
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {Card?.AlternationReason}
                </span>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {Card?.category}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={Card?.imageAsThumbnail}
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {Card?.name}
                  </a>
                </div>
                <div className="flex">
                  <div>
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://i.postimg.cc/jqc2LnDF/calendar-white-background-3d-rendering-519469-7595.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className=" mx-1 text-xs text-gray-600 dark:text-gray-300">
                      {Card?.DatePosted}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="text-start my-3 md:my-6">
              <Link  to={`/${Card?._id}`} className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
               View Details
              </Link>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentQuries;
