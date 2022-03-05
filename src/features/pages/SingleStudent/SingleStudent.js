import React from 'react'
import { useSelector } from 'react-redux';
import {selectCurrentClass} from '../../slices/dataSlice';
import './SingleStudent.css'

function SingleStudent() {
    const currentClass = useSelector(selectCurrentClass)
    const currentStudent = currentClass.students[currentClass.currentStudent]
  return (
      <div>
          {
             currentStudent.attendance.map((att,index)=>
             <div className='single-attendance'>
             <div className={att.status}>
             <p>{att.time}</p>
             <p>{att.status}</p>
             </div>
             </div>
             )
         } 


      </div>
    
  )
}

export default SingleStudent