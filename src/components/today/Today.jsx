import { Delete } from '@mui/icons-material';
import React, { useState ,useEffect } from 'react';
import "./today.css";
import ModalComp from './../modal/ModalComp';
import {useNavigate} from "react-router-dom";
import Personal from '../../pages/personal/Personal';
import { AllList } from '../../pages/allList/AllList';

const Today = () => {
  const [taskList , setTaskList] = useState([]);
  const [personalInfo , setPersonal] = useState([]);
  console.log(personalInfo);
  const [home , setHome] = useState([]);
  const [office , setOffice] = useState([]);

  const navigate = useNavigate();

 
  const saveTask = (taskObj) =>{
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList" , JSON.stringify(tempList))
    setTaskList(tempList)
    navigate("/")
  }

  const personalData = () =>{
    let psarr = localStorage.getItem("taskList");
    if(psarr){
      let psobj = JSON.parse(psarr);
      const ps = psobj.filter((data)=>data.Type === "personal");
      setPersonal(ps);
      console.log(ps);
    }
  }



  useEffect(()=>{
    let arr = localStorage.getItem("taskList");
    if(arr){
      let obj = JSON.parse(arr);
      setTaskList(obj)
    }
    personalData()
    },[]);
  

  


  return (
    <div className='today_container'>
      <h2 className='title'>Personal</h2>
             <span className="add"> <ModalComp save={saveTask} /></span>
  
             <div className="entrys">
{personalInfo && personalInfo.map((obj) =>{
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
    // </div>
   

  )
}

export default Today