import React from "react";
import TaskItemView from "./TaskItemView";

export default function TaskItem(props) {
  const { task } = props;

  return <TaskItemView task={task} />;
}
