import React, { useEffect, useState } from 'react';
import { Delete } from '@mui/icons-material';
import ModalComp from '../../components/modal/ModalComp';
import { useNavigate } from 'react-router-dom';

export const AllList = () => {
    const [taskList , setTaskList] = useState([])
    const navigate = useNavigate();

 
  const saveTask = (taskObj) =>{
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList" , JSON.stringify(tempList))
    setTaskList(tempList)
    navigate("/")
  }

  useEffect(()=>{
    let arr = localStorage.getItem("taskList");
    if(arr){
      let obj = JSON.parse(arr);
      setTaskList(obj)
    }

    },[]);
    return (
    <div>
            <h2 className='title'>Today</h2>
       <span className="add"><ModalComp save={saveTask} /></span>
      
 <div className="entrys">
    {taskList && taskList.map((obj) =>{
    return (
     <div className="singleEntry">
     <input type="checkbox" style={{margin:"10px"}}/>
     <span>{obj.Name}</span>
     <span>{obj.Date}</span>
     <span style={{cursor:"pointer"}}><Delete/></span>  
     </div>
    )
    })}
          
     </div>
    </div>
   
  )
}
