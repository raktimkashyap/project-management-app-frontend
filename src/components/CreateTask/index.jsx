import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTask, updateTask } from "../../features/taskSlice";
import CreateTaskView from "./CreateTaskView";

export default function CreateTask(props) {
  const { handleClose, existingTask } = props;
  const dispatch = useDispatch();

  const [task, setTask] = React.useState({
    title: "",
    description: "",
    dueDate: null,
    priority: "low",
  });

  useEffect(() => {
    if (existingTask) {
      setTask({
        title: existingTask.title,
        description: existingTask.description,
        dueDate: existingTask.dueDate,
        priority: existingTask.priority,
      });
    }
  }, [existingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleDueDate = (newValue) => {
    console.log("NewValue", newValue);
    setTask({ ...task, dueDate: newValue });
  };

  const handleCreate = () => {
    if (!task.title.replace(/\s/g, "").length) return;

    if (!existingTask) {
      dispatch(createTask(task));
    } else {
      const taskData = {
        ...task,
        taskId: existingTask._id,
      };
      dispatch(updateTask(taskData));
      handleClose();
    }
    setTask({
      title: "",
      description: "",
      dueDate: null,
      priority: "low",
    });
  };

  return (
    <CreateTaskView
      handleChange={handleChange}
      task={task}
      handleClose={handleClose}
      handleCreate={handleCreate}
      handleDueDate={handleDueDate}
      existingTask={existingTask}
    />
  );
}
