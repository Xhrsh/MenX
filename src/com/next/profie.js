import {React,useState} from "react";
import './pro.css'


export default function Profile(){
  const [userData, setUserData] = useState({
    name: 'Harish',
    phone: '1234567890',
    address: '',
    email: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
   
    console.log("Saving data:", userData);
  };

  return (
    <>
    <div className="user-profile-container ">
      <h2>User Profile</h2>
      <form>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={userData.name} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Phone:</label>
          <input 
            type="text" 
            name="phone" 
            value={userData.phone} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
  <label>Address:</label>
  <textarea 
    name="address" 
    value={userData.address} 
    onChange={handleInputChange} 
    rows="3"
  />
</div>

        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleInputChange} 
          />
        </div>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
    <div>
      <h2>MyOrder:</h2>
      <div>
        <h4>Total Product:0</h4>
        <h4>total prize:0</h4>

      </div>
    </div>
    </>
  );
};