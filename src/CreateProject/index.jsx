import React from "react";
import { useDispatch } from "react-redux";
import CreateProjectDialog from "./CreateProjectDialog";
import { createProject } from "../features/projectSlice";
export default function CreateProject(props) {
  const { handleClose } = props;
  const dispatch = useDispatch();
  const [project, setProject] = React.useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleCreateProject = () => {
    if (!project.title.replace(/\s/g, "").length) return;

    dispatch(createProject(project));
    handleClose();
  };

  return (
    <CreateProjectDialog
      project={project}
      handleChange={handleChange}
      handleClose={handleClose}
      handleSubmit={handleCreateProject}
    />
  );
}
