import Swal from 'sweetalert2'
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from 'react';
const AddQuries = () => {
    const {user } = useContext(AuthContext)
    const handleAddPlace = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const P_name = form.P_name.value;
        const P_Brand = form.P_Brand.value;
        const P_URL = form.P_URL.value;
        const QueryTitle = form.QueryTitle.value;
        const BoycottingReason = form.BoycottingReason.value;
        
    
        const Quries = {
            P_name,
            P_Brand,
            P_URL,
            QueryTitle,
            BoycottingReason,
            email: user?.email
        }
        // console.log(Quries);

        //sent data to the server
        fetch("http://localhost:5000/newQueries", {
            method:'POST',credentials: 'include',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Quries)
        },)
        .then(res =>res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId){
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

    <div className="bg-[#F4F3F0] p-4 md:p-24">
      <h2 className="text-3xl font-extrabold text-center my-6">Add Queries</h2>
      <form onSubmit={handleAddPlace}>
        {/*image and sportName */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label>
              <input
                type="text"
                name="P_name"
                placeholder="Product Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">product Brand</span>
            </label>
            <label>
              <input
                type="text"
                name="P_Brand"
                placeholder="product Brand"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* country and location  */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Image-URL</span>
            </label>
            <label>
              <input
                type="text"
                name="P_URL"
                placeholder="Product Image-URL"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Query Title</span>
            </label>
            <label>
              <input
                type="text"
                name="QueryTitle"
                placeholder="Query Title"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* Description and cost  */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Boycotting Reason</span>
            </label>
            <label>
              <input
                type="text"
                name="BoycottingReason"
                placeholder="Boycotting Reason"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          
        </div>
       
        

        <input
          type="submit"
          value="Please Add  "
          className="btn btn-block bg-slate-700 text-white font-bold text-xl"
        />
      </form>
    </div>
  );
};

export default AddQuries;
