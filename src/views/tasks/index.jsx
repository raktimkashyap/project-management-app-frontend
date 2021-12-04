import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../features/taskSlice";
import TasksView from "./TasksView";

export default function TasksPage(props) {
  const dispatch = useDispatch();
  const { allTasks } = useSelector((state) => state.taskReducer);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return <TasksView allTasks={allTasks} title={"All Tasks"} />;
}
