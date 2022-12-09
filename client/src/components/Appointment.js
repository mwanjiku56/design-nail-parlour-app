import React,{useEffect,useState} from 'react'
import './Appointment.css'

function Appointment() {
  const [appoint, setAppoint] = useState([]);

    useEffect(() => {
        fetch("/appointments")
          .then((response) => response.json())
          .then(data => setAppoint(data))
      }, []);
      
     



  
  return (
    <div className='appointment-form'>
      <h1>Book Appointment</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type='text' name='name' placeholder='Name' />

        <label htmlFor='date'>Date</label>
        <input type='date' name='date' value='' placeholder='Date' />
              <p>Nail design </p>
        <select name='design-selection' id='design-selection'>
          <option value='Nailart1'>Tribal design</option>
          <option value='Nailart2'>French detail</option>
          <option value='Nailart3'>Nude colour</option>
          <option value='Nailart4'>Stelleto design</option>
          <option value='Nailart5'>Cofffin Design</option>
        </select>
            <p>Manicurist </p>
        <select name='mani-selection' id='mani-selection'>
          <option value='Mani1'>Greg</option>
          <option value='Mani2'>Mr.Guru</option>
          <option value='Mani3'>Mr.nice</option>
          <option value='Mani4'>Angie</option>
          <option value='Mani5'>Phil</option>
        </select>

        <button type='submit'>Book</button>
        <button type='submit'>Cancel</button>
      </form>
      <div className="manicurist-container">
    

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Date</th>
            <th scope="col">Nail Design</th>
            <th scope="col">Manicurist ID</th>
          </tr>
        </thead>
        <tbody>
          {appoint.length < 1 ? (
            <tr>
              <td colSpan="3">No Appointment Available</td>
            </tr>
          ) : (
            appoint.map((data) => (
              <tr>
                <td key={data.customer_id}>{data.id}</td>
                <td>{data.date}</td>
                <td>{data.nail_design}</td>
                <td>{data.manicurist_id}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Appointment
