import React from 'react';
import "./Header.css";
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';




function Header() {
  return (
    <div className="header">
        <div className='header_left'>
           <Avatar className="header_avtar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <AccessTimeIcon/>
        </div>
       
       
        <div className='header_Search'>
          <SearchIcon/>
          <input placeholder='Search Clever Programmer'/>
          {/*Avatar*/}
        </div>
       
       
        <div className='header_right'>
          <HelpOutlineIcon/>
            {/*Avatar*/}
        </div>
      
    </div>
  )
}

export default Header
