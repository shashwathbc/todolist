import { Delete } from '@mui/icons-material';
import React from 'react';
import "./today.css";
import ModalComp from './../modal/ModalComp';

const Today = () => {
  return (
    <div className='today_container'>
       
       <h2 className='title'>Today</h2>
       <span className="add"> <ModalComp/></span>
        <div className="entrys">
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
          </div>

          <div className="singleEntry">
          <input type="checkbox" style={{margin:"10px"}}/>
          <span>Completed input-box component design today</span>
          <span><Delete/></span>  
          </div>
        </div>
    </div>
   

  )
}

export default Today