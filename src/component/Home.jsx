import { FaPlus } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ChocolateTable from './ChocolateTable';


const Home = () => {
    const chocolates = useLoaderData();

    
    
    return (
        <div className='mx-40 my-24'>
            <Link to="/addChocolate">
            <div className='flex items-center justify-center gap-2 border border-2 w-40 py-2 rounded mb-12'>
            <FaPlus/>
            <h2 className='font-bold'>New Chocolate</h2>
            </div>
            </Link>
            <div>
            <div className="overflow-x-auto w-full ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Country</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
      {
        chocolates.map(chocolate => <ChocolateTable
        key={chocolate._id}
        chocolate={chocolate}
        ></ChocolateTable>)
      }
    
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Home;