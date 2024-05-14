import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../UseAuth/UseAuth";

const OwnQuries = () => {

  // const {user}=useContext(AuthContext)
  const {user} =UseAuth() || {};
  // console.log(user);

  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/newQueries/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, [user]);
  // console.log(Cards);



  const handleDelete=_id=>{
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/newQueries/${_id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          // console.log(data);
          if(data.deletedCount >0){
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success"
            });

          }
        })


      }
    });
  }



  

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
              <Link to="/AddQuries">
                <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Add Queries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        {Cards.map((Card) => (
          <div key={Card._id} className="overflow-x-auto">
            <table className="table my-6">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Product image</th>
                  <th>Name</th>
                  <th>product Name</th>
                  <th>Product Brand</th>

                  <th>Delete</th>
                  <th>Update</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded-xl w-[156px] h-[156px]">
                          <img
                            src={Card?.P_URL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.displayName}</div>
                        <div className="text-sm opacity-50">{user?.email}</div>
                      </div>
                    </div>
                  </td>

                  <td>{Card?.P_name}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {Card?.P_Brand}
                    </button>
                  </th>

                  <th>
                    <button onClick={()=>handleDelete(Card?._id)} 
                    
                  
                    className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          // stroke-linecap="round"
                          // stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </th>
                  <th>
                    <Link to={`/updateProduct/${Card?._id}`}className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </Link>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OwnQuries;
