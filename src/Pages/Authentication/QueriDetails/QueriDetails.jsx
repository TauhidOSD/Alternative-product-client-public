import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const QueriDetails = () => {

    const [data,setData]=useState({});
    const {_id}=useParams();
    const details =useLoaderData();

    useEffect(()=>{
        const findCart =details?.find((item)=>item._id===_id);
         
        setData(findCart);
    },[_id,details])
    console.log(data);

    return (
        <div
          key={data._id}
          className=" lg:w-[60%] md:w-full mx-auto  max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <img
            className="object-cover w-full h-64"
            src={data?.ProductImage}
            alt="Article"
          />

          <div className="p-6">
            <div>
              <div className="flex justify-between">
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {data?.ProductName}
                </span>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {data?.BrandName}
                </span>
              </div>
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link"
              >
                {data?.QueryTitle}
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {data?.text}
              </p>
            </div>
            <div className="my-4">
              <div className="flex justify-between">
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {data?.AlternationReason}
                </span>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {data?.category}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={data?.imageAsThumbnail}
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {data?.name}
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
                      {data?.DatePosted}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    );
};

export default QueriDetails;