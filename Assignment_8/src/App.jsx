import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import "./App.css"
const App = () => {
  const [person, setPerson] = useState([])
  const [error, setError] = useState(false)
  const [loadig, setLoadig] = useState(true)
useEffect(() => {
  const fetchUser = async ()=>{
try {
     const res = await axios.get("https://dummyjson.com/users")
    const data = res.data.users;
    setPerson(data)
    
   } catch (err) {
    setError("Something went wrong")
   }
   finally{
    setLoadig(false)
   }
    
  }
   fetchUser()
  }
,[])
  
  return (
  <div className="user-container">
  {loadig && <p className="status-msg">Loading profiles...</p>}
  {error && <p className="status-msg" style={{color: 'red'}}>{error}</p>}

 {person.map((p) => (
  <div key={p.id} className="user-card">
    {/* Header */}
    <div className="card-header">
      <img src={p.image} alt={p.firstName} className="header-img" />
      <div className="header-text">
        <h2>{p.firstName} {p.maidenName} {p.lastName}</h2>
        <p className="value">@{p.username} | {p.email}</p>
        <span className="badge">{p.role}</span>
      </div>
    </div> <div>
      {loading && <p>Loading.....</p>}
      {error && <p>Error....</p>}
      {
       person.map((user) => {
  return(
    <div className="user-card">

  <img src={user.picture.large} alt="User" className="img" />

  <h2 className="name">
    {user.name.title} {user.name.first} {user.name.last}
  </h2>

  <p><strong>Gender:</strong> {user.gender}</p>
  <p><strong>Email:</strong> {user.email}</p>
  <p><strong>Phone:</strong> {user.phone}</p>
  <p><strong>Cell:</strong> {user.cell}</p>

  <h3>Location</h3>
  <p>{user.location.street.number}, {user.location.street.name}</p>
  <p>{user.location.city}, {user.location.state}</p>
  <p>{user.location.country} - {user.location.postcode}</p>

  <h3>Coordinates</h3>
  <p><strong>Latitude:</strong> {user.location.coordinates.latitude}</p>
  <p><strong>Longitude:</strong> {user.location.coordinates.longitude}</p>

  <h3>Timezone</h3>
  <p><strong>Offset:</strong> {user.location.timezone.offset}</p>
  <p><strong>Description:</strong> {user.location.timezone.description}</p>

  <h3>Login Info</h3>
  <p><strong>UUID:</strong> {user.login.uuid}</p>
  <p><strong>Username:</strong> {user.login.username}</p>
  <p><strong>Password:</strong> {user.login.password}</p>
  <p><strong>Salt:</strong> {user.login.salt}</p>
  <p><strong>MD5:</strong> {user.login.md5}</p>
  <p><strong>SHA1:</strong> {user.login.sha1}</p>
  <p><strong>SHA256:</strong> {user.login.sha256}</p>

  <h3>Date of Birth</h3>
  <p><strong>Date:</strong> {user.dob.date}</p>
  <p><strong>Age:</strong> {user.dob.age}</p>

  <h3>Registered</h3>
  <p><strong>Date:</strong> {user.registered.date}</p>
  <p><strong>Age:</strong> {user.registered.age}</p>

  <h3>ID</h3>
  <p><strong>Name:</strong> {user.id.name}</p>
  <p><strong>Value:</strong> {user.id.value}</p>
  <p><strong>Nationality:</strong> {user.nat}</p>

</div>

  )
})
      }
    </div>

    <div className="content-grid">
      {/* Personal & Physical */}
      <div className="info-group">
        <h4>Personal Details</h4>
        <div className="data-row"><span className="label">Birth Date:</span> <span className="value">{p.birthDate}</span></div>
        <div className="data-row"><span className="label">Age:</span> <span className="value">{p.age}</span></div>
        <div className="data-row"><span className="label">Gender:</span> <span className="value">{p.gender}</span></div>
        <div className="data-row"><span className="label">Phone:</span> <span className="value">{p.phone}</span></div>
        <div className="data-row"><span className="label">Password:</span> <span className="value">{p.password}</span></div>
      </div>

      <div className="info-group">
        <h4>Bio-Metrics</h4>
        <div className="data-row"><span className="label">Height:</span> <span className="value">{p.height} cm</span></div>
        <div className="data-row"><span className="label">Weight:</span> <span className="value">{p.weight} kg</span></div>
        <div className="data-row"><span className="label">Blood Group:</span> <span className="value">{p.bloodGroup}</span></div>
        <div className="data-row"><span className="label">Eye Color:</span> <span className="value">{p.eyeColor}</span></div>
        <div className="data-row"><span className="label">Hair:</span> <span className="value">{p.hair.type} ({p.hair.color})</span></div>
      </div>

      {/* Professional */}
      <div className="info-group full-width">
        <h4>Professional Background</h4>
        <div className="data-row"><span className="label">Company:</span> <span className="value">{p.company.name}</span></div>
        <div className="data-row"><span className="label">Title:</span> <span className="value">{p.company.title}</span></div>
        <div className="data-row"><span className="label">Department:</span> <span className="value">{p.company.department}</span></div>
        <div className="data-row"><span className="label">University:</span> <span className="value">{p.university}</span></div>
      </div>

      {/* Address */}
      <div className="info-group">
        <h4>Primary Residence</h4>
        <p className="value" style={{textAlign: 'left'}}>
          {p.address.address}<br />
          {p.address.city}, {p.address.state} {p.address.postalCode}<br />
          {p.address.country} ({p.address.stateCode})
        </p>
        <div className="data-row" style={{marginTop: '10px'}}>
          <span className="label">Coords:</span> <span className="value">{p.address.coordinates.lat}, {p.address.coordinates.lng}</span>
        </div>
      </div>

      {/* Financial */}
      <div className="info-group">
        <h4>Financial & Bank</h4>
        <div className="data-row"><span className="label">Card:</span> <span className="value">{p.bank.cardType}</span></div>
        <div className="data-row"><span className="label">Number:</span> <span className="value">{p.bank.cardNumber}</span></div>
        <div className="data-row"><span className="label">Expires:</span> <span className="value">{p.bank.cardExpire}</span></div>
        <div className="data-row"><span className="label">Currency:</span> <span className="value">{p.bank.currency}</span></div>
        <div className="data-row"><span className="label">IBAN:</span> <span className="value" style={{fontSize: '0.7rem'}}>{p.bank.iban}</span></div>
      </div>

     
    </div>
  </div>
))}
</div>
  )
}

export default App
