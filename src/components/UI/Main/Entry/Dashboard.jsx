import React from 'react'
import {useRef, useEffect, useState} from 'react'

function Dashboard(userData) {
  const [input, setInput] = useState({alias: userData.alias,
    email: userData.email,
    password: userData.password,
    firstName: userData.firstName,
    lastName: userData.lastName,
    address: userData.adsress,
    zip: userData.zip,
    city: userData.city,
    phone: userData.phone,
    role_id: userData.role_id,
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await handleUpdate(userData.uuid, input);
  }

  return (
    <>
      <article id="dashboard">
          <h2>Dashboard</h2>
          <form onSubmit={handleUpdate}>

            <legend>User information</legend>

                <label for="alias">Alias</label>
                <input type="text" value={input.alias} onChange={(e) =>
                          setInput({...input, alias: e.target.value})}/>

                <label for="firstName">First name</label>
                <input type="text" value={input.firstName} onChange={(e) =>
                          setInput({...input, firstName: e.target.value})}/>  

                <label for="lastName">Last name</label>
                <input type="text" value={input.lastName} onChange={(e) =>
                          setInput({...input, lastName: e.target.value})}/>

                <label for="address">Address</label>
                <input type="text" value={input.address} onChange={(e) =>
                          setInput({...input, address: e.target.value})}/>


                <label for="zipcode">zip code</label>
                <input type="text" value={input.zip} onChange={(e) => 
                          setInput({...input, zip: e.target.value})}/>

                <label for="city">city</label>
                <input type="text" value={input.city} onChange={(e) => 
                          setInput({...input, city: e.target.value})}/>          

                <label for="number">phone</label>
                <input type="number" value={input.phone} onChange={(e) => 
                          setInput({...input, phone: e.target.value})}/>
                
                <input type="submit" value="send"></input>
            </form>
      </article>
      
    
    
    </>
  
  )

}

export default Dashboard