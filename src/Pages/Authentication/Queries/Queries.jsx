import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Queries = () => {

    const {user}=useContext(AuthContext)

  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/newQueries")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  // console.log(Cards);

    return (
        <div className="my-12">
           <section>
          
        {Cards.map((Card,index)  => (
          <div key={Card._id + index} className="overflow-x-auto">
            <table className="table my-6">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Product image</th>
                  <th>Name</th>
                  <th>product Name</th>
                  <th>Product Brand</th>

                  {/* <th>Delete</th>
                  <th>Update</th> */}
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
                    <Link to={`/${Card?._id}`} className="btn btn-ghost btn-xs bg-blue-400">recommend</Link>
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

export default Queries;