import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddChocolate = () => {

    const handleAddChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const newChocolate = {name, country, category};
        console.log(newChocolate);

        fetch('http://localhost:5000/chocolate', {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!!',
                        text: 'Chocolate Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

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
            <form onSubmit={handleAddChocolate}>
                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <label className="w-full">
                        <input type="text" placeholder="Enter Chocolate Name" name="name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text font-bold">Country</span>
                    </label>
                    <label className="w-full">
                        <input type="text" placeholder="Enter Country Name" name="country" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text font-bold">Category</span>
                    </label>
                    <div className="input-group">
                        <select className="select select-bordered  w-full" name="category">
                        <option selected>Premium</option>
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