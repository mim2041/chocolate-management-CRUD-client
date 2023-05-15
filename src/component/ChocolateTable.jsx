// import { AiFillEdit } from "react-icons/hi2";
// import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolateTable = ({chocolate, chocolates, setChocolates}) => {
    const {_id, name, country, category, photo} = chocolate;

    // console.log(chocolates)
    const handleDelete = _id => {
        // console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed){

                fetch(`http://localhost:5000/chocolate/${_id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your Chocolate has been deleted.',
                            'success'
                        )
                        const remaining = chocolates.filter(ch=>ch._id !== _id);
                        setChocolates(remaining);
                    }
                })
            }
        })
    }
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    
                </div>
                </td>
                <td>
                {name}
                </td>
                <td>{country}</td>
                <td>{category}</td>
                <th>
                <Link to={`/updateChocolate/${_id}`}>
                <button className="btn btn-ghost btn-xs text-2xl"><FaEdit/></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs text-2xl">X</button>
                </th>
            </tr>
        </tbody>
    );
};

export default ChocolateTable;