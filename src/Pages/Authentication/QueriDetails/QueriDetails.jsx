import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
const QueriDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  // console.log(user);

  const [product, setProduct] = useState({});
  const { _id } = useParams();
  const details = useLoaderData();

  useEffect(() => {
    const findCart = details?.find((item) => item._id === _id);

    setProduct(findCart);
  }, [_id, details]);
  // console.log(product);
 
 

  const handleformSubmition =(e) =>{

   
    e.preventDefault();
    const form =e.target
    const id=_id
    const title =form.title.value
    const image=form.image.value
    const name =form.name.value
    const deadline=startDate
    const reason=form.reason.value
    const email =form.email.value
    console.log(id,title,image,name,reason,deadline,email)

    const recomendation = {
      id,title,image,name,deadline,reason,email
    }

    axios.post("https://alternative-project.vercel.app/recomendation",recomendation
  )
  // .then(res =>res.json())
  .then(data=>{
      console.log(data);
      if(data?.data?.insertedId){
          Swal.fire({
              title: 'Success!',
              text: 'User added Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
      }
  })
     
  }


 


 
  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <div key={product?._id } className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div>
          <img className="h-[80px] w-[120px]" src={product?.P_URL} alt="" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 ">
            product brand :{product?.P_Brand}
          </span>
          <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
            {product?.P_name}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {product?.QueryTitle}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">
            {product?.BoycottingReason}
          </p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Deadline: 12/08/2024
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 "></p>
              <p className="mt-2 text-sm  text-gray-600 "></p>
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 "></p>
        </div>
      </div>

      {/* Place A Bid Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Add a Recommendation
        </h2>

        <form onSubmit={handleformSubmition}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="price">
                RecommendationTitle
              </label>
              <input
                id="price"
                type="text"
                name="title"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="price">
              user Email
              </label>
              <input
                id="price"
                type="email"
                name="email"
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="price">
                RecommendedProductImage
              </label>
              <input
                id="price"
                type="text"
                name="image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Recommendedproduct Name
              </label>
              <input
                id="price"
                name="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Recommendation reason
              </label>
              <input
                id="price"
                name="reason"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
              className=" border p-2 rounded-md"
               selected={startDate} onChange={(date) => setStartDate(date)} />

            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              AddRecommendation
            </button>
          </div>
        </form>
      </section>
    </div>
    // <div
    //   key={product?._id }
    //   className=" my-6 lg:w-[60%] md:w-full mx-auto  max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
    // >
    //   <img
    //     className="object-cover w-full h-64"
    //     src={product?.P_URL}

    //     alt="Article"
    //   />

    //   <div className="p-6">
    //     <div>
    //       <div className="flex justify-between">
    //         <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
    //           {product?.P_name}

    //         </span>
    //         <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
    //           {product?.P_Brand}

    //         </span>
    //       </div>
    //       <a
    //         href="#"
    //         className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
    //         tabIndex="0"
    //         role="link"
    //       >
    //         {product?.QueryTitle}

    //       </a>
    //       <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
    //         {product?.BoycottingReason}

    //       </p>
    //     </div>
    //     <div className="my-4">
    //       <div className="flex justify-between">
    //         <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
    //           {product?.AlternationReason}
    //         </span>
    //         <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
    //           {product?.category}
    //         </span>
    //       </div>
    //     </div>

    //     <div className="mt-4">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center">
    //           <img
    //             className="object-cover w-10 h-10 rounded-full"
    //             src={user?.photoURL}

    //             alt="Avatar"
    //           />
    //           <div className="ml-3">{user?.displayName}</div>
    //           <a
    //             href="#"
    //             className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
    //             tabIndex="0"
    //             role="link"
    //           >
    //             {product?.name}
    //           </a>
    //         </div>
    //         <div className="flex">
    //           <div>
    //             <img
    //               className="h-6 w-6 rounded-full"
    //               src="https://i.postimg.cc/jqc2LnDF/calendar-white-background-3d-rendering-519469-7595.jpg"
    //               alt=""
    //             />
    //           </div>
    //           <div>
    //             <span className=" mx-1 text-xs text-gray-600 dark:text-gray-300">
    //               {user?.lastRefreshAt}

    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  );
};

export default QueriDetails;
