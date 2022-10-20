import React from "react";
import {FiEdit, FiDelete} from 'react-icons/fi';



  
const Home = () => {
  return (
    <div>
     <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Hourly Pay</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>Tom Cruise</td>
          <td>TC_mavrick@gmal.com</td>
          <td>$100</td>
          <td>Permanent</td>
	  <button onClick={()=>alert('Edit saved!')}>
                <FiEdit />
            <td></td>
          </button>
          <button onClick={() => alert('Removed!')}>
                <FiDelete />
          </button>
        </tr>
        <tr>
          <td>Joe Biden</td>
          <td>littleJo@gmal.com</td>
          <td>$30</td>
          <td>Temp</td>
          <button onClick={()=>alert('Edit saved!')}>
                <FiEdit />
            <td></td>
          </button>
          <button onClick={() => alert('Removed!')}>
                <FiDelete />
          </button>
        </tr>
        <tr>
          <td>Bluey</td>
          <td>iambluey@gmal.com</td>
          <td>$55</td>
          <td>Temp</td>
          <button onClick={()=>alert('Edit saved!')}>
                <FiEdit />
            <td></td>
          </button>
          <button onClick={() => alert('Removed!')}>
                <FiDelete />
          </button>
        </tr>
      </table>
    </div>
  );
};
  
export default Home;