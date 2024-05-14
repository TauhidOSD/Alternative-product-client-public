import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, P_name, P_Brand, P_URL, QueryTitle, BoycottingReason } = product;

  const handleUpdate = (event) => {
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
    };
    // console.log(Quries);

    //sent data to the server
    fetch(`http://localhost:5000/newQueries/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Quries),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "User Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-4 md:p-24">
      <h2 className="text-3xl font-extrabold text-center my-6">
        Update Queries:{product?.P_name}
      </h2>
      <form onSubmit={handleUpdate}>
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

                defaultValue={P_name}
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
                defaultValue={P_Brand}
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
                defaultValue={P_URL}
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
                defaultValue={QueryTitle}
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
                defaultValue={BoycottingReason}
                placeholder="Boycotting Reason"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Now"
          className="btn btn-block bg-slate-700 text-white font-bold text-xl"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
