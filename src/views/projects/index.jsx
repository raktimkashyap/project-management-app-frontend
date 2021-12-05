import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSingleProject } from "../../features/projectSlice";
import ProjectView from "./ProjectView";

export default function Project() {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const { projectTasks, allProjects } = useSelector(
    (state) => state.projectReducer
  );

  const selectedProject = allProjects.filter(
    (project) => project._id === projectId
  );

  useEffect(() => {
    dispatch(getSingleProject(projectId));
  }, [dispatch, projectId]);

  return (
    <ProjectView project={selectedProject[0]} projectTasks={projectTasks} />
  );
}
