import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";


const AddChocolate = () => {
    return (
        <div className='mx-40 my-24'>
            <Link to="/">
                <div className='flex items-center justify-center gap-2  w-40 py-2 mb-8'>
                    <HiArrowLeft/>
                    <h2 className='font-bold'>All Chocolates</h2>
                </div>
            </Link>
            <hr />
            <div className="mt-4 bg-[#F4F3F0] p-24">
            <h2 className="text-3xl text-center font-bold mb-8">New Chocolates</h2>
            <form>
                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <label className="w-full">
                        <input type="text" placeholder="Enter Chocolate Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text font-bold">Country</span>
                    </label>
                    <label className="w-full">
                        <input type="text" placeholder="Enter Country Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text font-bold">Category</span>
                    </label>
                    <div className="input-group">
                        <select className="select select-bordered  w-full">
                        <option disabled selected>Premium</option>
                        <option>Organic</option>
                        <option>Gourmet</option>
                        </select>
                    </div>
                </div>
                <input className="btn btn-block bg-amber-800	" type="submit" value="Save"/>
            </form>
            </div>
        </div>
    );
};

export default AddChocolate;