import React, { useEffect, useState } from 'react'

const NewCard = ({student, info, grade}) => {

  const [status, setStatus] = useState()
  const [newGrade, setNewGrade] = useState()

  const calculateGrade = () => {
    if(grade >= 6){
      setStatus('Past')
    }
    else if(grade < 6){
      setStatus('Failed')
    }
    else{
      setStatus('Absent')
    }
  }

  const handleChange = (e) => {
    setNewGrade(e.target.value)
  }

  useEffect(() => {
    const calculateGrade2 = () => {
      if(newGrade >= 6){
        setStatus('Past')
      }
      else if(newGrade < 6){
        setStatus('Failed')
      }
      else{
        setStatus('Absent')
      }
    }
    calculateGrade2()
  }, [newGrade])
  

  return (
    <div className="card mb-3" style={{width: "50vw"}}>
        <div className="card-body">
          <h5 className="card-title">{student}</h5>
          <p className="card-text">{info}</p>
          {
            grade
            ?
            <div className='d-flex justify-content-end'>
            <button className='btn btn-primary' onClick={calculateGrade}>Calculate grade: <span className='fw-bold fst-italic'>{status}</span></button>
            </div>
            :
            <div className='d-flex justify-content-between'>
              <input className='form-control w-25' type="text" placeholder='Enter a grade' onChange={(e) => handleChange(e)}/>
              <span>{status}</span>
            </div>
          }
        </div>
    </div>
  )
}

export default NewCard