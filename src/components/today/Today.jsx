import { Delete } from '@mui/icons-material';
import React, { useState } from 'react';
import "./today.css";
import ModalComp from './../modal/ModalComp';
import {useNavigate} from "react-router-dom";

const Today = () => {
  const [taskList , setTaskList] = useState([]);

  const navigate = useNavigate();

  const saveTask = (taskObj) =>{
    let tempList = taskList
    tempList.push(taskObj)
    setTaskList(tempList)
    navigate("/")
  }
  return (
    <div className='today_container'>
       
       <h2 className='title'>Today</h2>
       <span className="add"> <ModalComp save={saveTask} /></span>
        <div className="entrys">
{taskList && taskList.map((obj) =>{
  return (
    <div className="singleEntry">
    <input type="checkbox" style={{margin:"10px"}}/>
    <span>{obj.Name}</span>
    <span>{obj.Date}</span>
    <span>{obj.Type}</span>
    <span><Delete/></span>  
    </div>
  )
})}
         
{/* 
          <div className="singleEntry">
          <input type="checkbox" style={{margin:"10px"}}/>
          <span>Completed input-box component design today</span>
          <span><Delete/></span>  
          </div>

          <div className="singleEntry">
          <input type="checkbox" style={{margin:"10px"}}/>
          <span>Completed input-box component design today</span>
          <span><Delete/></span>  
          </div>

          <div className="singleEntry">
          <input type="checkbox" style={{margin:"10px"}}/>
          <span>Completed input-box component design today</span>
          <span><Delete/></span>  
          </div> */}
        </div>
    </div>
   

  )
}

export default Today