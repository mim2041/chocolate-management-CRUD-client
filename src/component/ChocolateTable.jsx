// import { AiFillEdit } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";

const ChocolateTable = ({chocolate}) => {
    const {name, country, category, photo} = chocolate;
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
          <button className="btn btn-ghost btn-xs text-2xl"><FaEdit/></button>
          <button className="btn btn-ghost btn-xs text-2xl">X</button>
        </th>
      </tr>
        </tbody>
    );
};

export default ChocolateTable;