import React from 'react'
import "./SiderbarOption.css";
import MessageIcon from '@mui/icons-material/Message';



function SiderbarOption({Icon,title}) {
  return (
    <div className='siderbaroption'>
        <MessageIcon/>
        {/* {Icon && <Icon className="siderbaroption_icon">} */}
      
    </div>
  )
}

export default SiderbarOption




