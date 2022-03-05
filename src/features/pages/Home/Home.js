import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {selectClasses,setClasses} from '../../slices/dataSlice';
import axios from 'axios'
import { useEffect } from 'react';
import SingleClass from '../../components/SingleClass/SingleClass';
import styles from '../../counter/Counter.module.css';
import {useNavigate} from 'react-router-dom'
import dummy from '../dummydata.json'


function Home() {
    const classes = useSelector(selectClasses);
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    useEffect(() => {
      dispatch(setClasses(dummy));
       
      }, []);

      const add=()=>{
       return navigate('/add-class')
      }

   

  return (
    <div>
    <br/>
    <button className={styles.button} onClick = {add} >Add Class</button>
    <br/>
    {classes.map((clas,index)=> <SingleClass key = {clas._id} index = {index} {...clas}/>)}
    </div>
  )
}

export default Home