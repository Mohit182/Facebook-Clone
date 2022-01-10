import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, IconButton } from "@material-ui/core";
import "./Contacts.css";
function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__top">
        <p id="hello">Contacts</p>
        <IconButton >
          <VideoCallIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <div className="contacts__bottom">
        <div className="contacts__bottom__options">
          <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQFDTXDQ0Dcz1Q/profile-displayphoto-shrink_100_100/0/1606661766332?e=1647475200&v=beta&t=lPYi5KqsT_wd8sH8hF6XLxfl06uiXXalMCkap3e5Npc'/>
          <p>Puneet Singh</p>
        </div>
        <div className="contacts__bottom__options">
          <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQEBD5xgTEE_dA/profile-displayphoto-shrink_100_100/0/1624919155764?e=1647475200&v=beta&t=uCz0njUzhzvJP73RGRFD8iSMtfMFE6321cunF02MIgo'/>
          <p>Nehal Chandra</p>
        </div>
        <div className="contacts__bottom__options">
          <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQGPzj6eu4pNlw/profile-displayphoto-shrink_100_100/0/1632944019847?e=1647475200&v=beta&t=PaDbHlOz1_1ndX9dTiM9wAEkYUh62uzp643-fxbBxoM'/>
          <p>Rushil Makkar</p>
        </div>
        <div className="contacts__bottom__options">
          <Avatar src='https://media-exp1.licdn.com/dms/image/C4E03AQG7rZOSsN_Nxg/profile-displayphoto-shrink_100_100/0/1608432957053?e=1647475200&v=beta&t=t2sEtA9dDzsBj0VY2ga2_tbJPdb_nplIQU05BvSQK9A'/>
          <p>Rahul Jangir</p>
        </div>
        <div className="contacts__bottom__options">
          <Avatar src='https://media-exp1.licdn.com/dms/image/D4E35AQFYp4CPcDMolw/profile-framedphoto-shrink_100_100/0/1622905485294?e=1641906000&v=beta&t=22WctuA3qfNA9M01ax_N5hzTssYuNGo860yWg9YcqqQ'/>
          <p>Adamya Kaushik</p>
        </div>
        <div className="contacts__bottom__options">
          <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQHYvB-AQ38zPQ/profile-displayphoto-shrink_100_100/0/1613736773824?e=1647475200&v=beta&t=oTe3ON1hTcYDEz0fVtQtn-Uoyrjkbtk0pxUjvy26Rmg'/>
          <p>Pranjal Yadav</p>
        </div>
        <div className="contacts__bottom__options">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEByyMV6kxeig/profile-displayphoto-shrink_100_100/0/1641407713113?e=1647475200&v=beta&t=6rLw1w7f5vFDoEWbko0NKSa0pzUmm0cZnmaBv2uExVQ"/>
          <p>Aditya Singh</p>
        </div>
        <div className="contacts__bottom__options">
          <Avatar src='https://media-exp1.licdn.com/dms/image/D4E35AQF4mHW561XkmQ/profile-framedphoto-shrink_100_100/0/1621846113505?e=1641906000&v=beta&t=iloIKh-pwL5xNQk9vd5e65rlJrEhEJEwhN0jFUho0T4'/>
          <p>Mudit Mahawar</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
