import { useContext, useEffect, useState } from "react";
import { useLoaderData,  useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const QueriDetails = () => {

    const {user}=useContext(AuthContext);
    // console.log(user);

    const [product,setProduct]=useState({});
    const {_id}=useParams();
    const details =useLoaderData();

    useEffect(()=>{
        const findCart =details?.find((item)=>item._id===_id);
         
        setProduct(findCart);
    },[_id,details])
    // console.log(product);

    return (
        <div 
          key={product?._id }
          className=" my-6 lg:w-[60%] md:w-full mx-auto  max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <img
            className="object-cover w-full h-64"
            src={product?.P_URL}
                
            alt="Article"
          />

          <div className="p-6">
            <div>
              <div className="flex justify-between">
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {product?.P_name}

                </span>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {product?.P_Brand}

                </span>
              </div>
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link"
              >
                {product?.QueryTitle}

              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {product?.BoycottingReason}

              </p>
            </div>
            <div className="my-4">
              <div className="flex justify-between">
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {product?.AlternationReason}
                </span>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {product?.category}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={user?.photoURL}
                    
                    alt="Avatar"
                  />
                  <div className="ml-3">{user?.displayName}</div>
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {product?.name}
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
                      {user?.lastRefreshAt}

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