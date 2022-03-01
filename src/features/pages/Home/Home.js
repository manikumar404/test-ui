import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {selectClasses,setClasses} from '../../slices/dataSlice';
import axios from 'axios'
import { useEffect } from 'react';
import SingleClass from '../../components/SingleClass/SingleClass';

function Home() {
    const classes = useSelector(selectClasses);
    const dispatch = useDispatch()
    useEffect(() => {
        axios
        .get("http://localhost:3001/tutors/my-class?id=mani")
        .then(function (response) {
          dispatch(setClasses(response.data));
      
           
         
        })
        .catch(function (error) {
          
          console.log(error);
        })
        .then(function () {
        });
       
      }, []);

   

  return (
    <div>{classes.map((clas,index)=> <SingleClass key = {clas._id} index = {index} {...clas}/>)}</div>
  )
}

export default Home