import React from 'react'
import {useState, useEffect} from 'react';
import "./firebase.js"
import "./Sliderbar.js";
import './Sliderbar.css';
import SiderbarOption from './SidebarOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase";
// import { useStateValue } from './StateProvider';



function Sliderbar() {
  const [channels, setChannels] = useState([]);
    

    useEffect(() => {
        //run this code ONCE when the sidebar component loads 
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map((doc)=>({
                id : doc.id,
                name : doc.data().name,
            }))
            )
            )
        );
    }, []);
  return (
    <div className='siderbar'>
      <div className="sidebar_header">
         <div className='sidebar_info'>
            <h2>Programmer</h2>
               <h3> 
                 <FiberManualRecordIcon/>
                   Shivam Mourya
               </h3>
         </div>
            <CreateIcon/>
      </div>
        <SiderbarOption Icon={InsertCommentIcon} title="Threads"/>
        <SiderbarOption Icon={InboxIcon} title="Mentions & reactions"/>
        <SiderbarOption Icon={DraftsIcon} title="Saved Items"/>
        <SiderbarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
        <SiderbarOption Icon={PeopleAltIcon} title="People & user groups"/>
        <SiderbarOption Icon={AppsIcon} title="Apps"/>
        <SiderbarOption Icon={FileCopyIcon} title="FileBrowser"/>
        <SiderbarOption Icon={ExpandLessIcon} title="Show less"/>
        <hr/>
        <SiderbarOption Icon={ExpandMoreIcon} title="Channels"  />
        <hr/>
        <SiderbarOption Icon = {AddIcon} addChannelOption title = 'Add Channel' />
        {/* { channels.map((channel) =>(
           <SidebarOption title = {channel.name} id = {channel.id}/>
))} */}
    </div>
  )
}

export default Sliderbar
