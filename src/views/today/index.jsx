import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksByDueDate } from "../../features/taskSlice";
import TasksView from "../tasks/TasksView";

export default function Today() {
  const dispatch = useDispatch();

  const { today } = useSelector((state) => state.taskReducer);

  useEffect(() => {
    dispatch(getTasksByDueDate(new Date()));
  }, [dispatch]);

  return <TasksView allTasks={today} title={"Today"} />;
}
