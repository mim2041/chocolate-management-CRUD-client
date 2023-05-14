import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='mx-40 my-24'>
            <Link to="/addChocolate">
            <div className='flex items-center justify-center gap-2 border border-2 w-40 py-2 rounded'>
            <FaPlus/>
            <h2 className='font-bold'>New Chocolate</h2>
            </div>
            </Link>
        </div>
    );
};

export default Home;