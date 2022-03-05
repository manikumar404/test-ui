import './AddClass.css'
import styles from '../../counter/Counter.module.css';
 import React from 'react'
 import { useState } from "react";
 import axios from "axios";
 import { useDispatch } from 'react-redux';
import {addClass} from '../../slices/dataSlice';
 
 function AddClass() {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/tutors/add-class',inputs)
        .then(res => dispatch(addClass(res.data)))
        .catch(err => console.Console.log(err))
      
      }

   return (
    <form  onSubmit={handleSubmit}>
    <label>Enter module name:
    <input 
      className={styles.textbox}
      type="text" 
      name="className" 
      value={inputs.className || ""} 
      onChange={handleChange}
    />
    </label>

    <label>Enter module code:
    <input 
    className={styles.textbox}
      type="text" 
      name="moduleCode" 
      value={inputs.moduleCode || ""} 
      onChange={handleChange}
    />
    </label>
    <label>Enter tutor id:
    <input
    className={styles.textbox} 
      type="text" 
      name="tutor" 
      value={inputs.tutor || ""} 
      onChange={handleChange}
    />
    </label>
    <label>Enter module credit:
      <input 
      className={styles.textbox}
        type="number" 
        name="credit" 
        value={inputs.credit || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter class strength:
      <input 
      className={styles.textbox}
        type="number" 
        name="classStrength" 
        value={inputs.classStrength || ""} 
        onChange={handleChange}
      />
      </label>
      <input className={styles.button} type="submit" />
  </form>
   )
 }
 
 export default AddClass