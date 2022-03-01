import React from 'react'
import './MyClass.css'
import { useSelector, useDispatch } from 'react-redux';
import {selectCurrentClass} from '../../slices/dataSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddStudent from '../../components/AddStudent/AddStudent';
import {
    faSave,
    faFilePowerpoint,
    faTimes,
  } from "@fortawesome/free-solid-svg-icons";


function MyClass() {
    const currentClass = useSelector(selectCurrentClass);
  return (
    <div>
    <br/>
    <AddStudent id={currentClass._id} /> 
    <br/>
        <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>@Email</th>
            <th>Gender</th>
            <th>Attendance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentClass.students.map((student, index) => (
            <tr key = {student._id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.gender}</td>
              <td id="status">present</td>
              <td>
                <a
                  title="put student present"
                  className="btn border-shadow update"
                >
                  <span title="put student present" className="text-gradient">
                    <FontAwesomeIcon icon={faFilePowerpoint} />
                  </span>
                </a>
                <a
                  title="put student absent"
                  className="btn border-shadow delete"
                >
                  <span title="put student absent" className="text-gradient">
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </a>
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )
}

export default MyClass