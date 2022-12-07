import React,{useState, useEffect} from 'react'


function Manicurist() {
    const [manicurists, setManicurists] = useState([]);

    useEffect(() => {
        fetch("/manicurists")
          .then((response) => response.json())
          .then(data => setManicurists(data))
      }, []);
      
      console.log(manicurists);
  return (
    <div className='trainers-container'>
      <h1 className='trainers-heading'>Meet the Manicurist Team</h1>
      <div className='trainers'></div>
      <div className='join-us'>
      </div>
    </div>
  )
}

export default Manicurist
