import React from 'react'
import './Appointment.css'

function Appointment() {
  return (
    <div className='appointment-form'>
      <h1>Book Appointment</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type='text' name='name' placeholder='Name' />

        <label htmlFor='date'>Date</label>
        <input type='date' name='date' value='' placeholder='Date' />

        <select name='design-selection' id='desin-selection'>
          <option value='Nailart1'>Tribal design</option>
          <option value='Nailart2'>French detail</option>
          <option value='Nailart3'>Nude colour</option>
          <option value='Nailart4'>Stelleto design</option>
          <option value='Nailart5'>Cofffin Design</option>
        </select>

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
    </div>
  )
}

export default Appointment
