import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStateValue } from "../../../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={PeopleAltIcon} title="Friends" />
      <SidebarRow Icon={GroupsIcon} title="Groups" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={OndemandVideoIcon} title="Watch" />
      <SidebarRow Icon={AccessTimeIcon} title="Memories" />
      <SidebarRow Icon={KeyboardArrowDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
