import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBarView from "./SideBarView";

export default function Sidebar() {
  const [createProject, setCreateProject] = useState(false);
  const toggleCreateProject = (value) => {
    setCreateProject(value);
  };
  const { allProjects } = useSelector((state) => state.projectReducer);
  // const sidebarMenu = [
  //   {
  //     title: "All Tasks",
  //     link: `/all-tasks`,
  //     icon: <ListAltOutlined />,
  //     active: window.location.pathname.includes("all-tasks"),
  //   },
  //   {
  //     title: "Today",
  //     link: `/today`,
  //     icon: <EventOutlined />,
  //     active: window.location.pathname.includes("today"),
  //   },
  //   {
  //     title: "Upcomming",
  //     link: `/upcomming`,
  //     icon: <DateRangeOutlined />,
  //     active: window.location.pathname.includes("tomorrow"),
  //   },
  // ];

  return (
    <SideBarView
      createProject={createProject}
      toggleCreateProject={toggleCreateProject}
      allProjects={allProjects}
    />
  );
}
