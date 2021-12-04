import { baseUrl } from "./constants";

const endpoints = {
  auth: {
    signUp: baseUrl + `/auth/signUp`,
    signIn: baseUrl + `/auth/signIn`,
    checkAuth: baseUrl + `/auth/isAuthenticated`,
  },
  task: {
    createTask: baseUrl + `/task`,
    getAllTasks: baseUrl + `/task`,
    getTasksByDueDate: (date) => baseUrl + `/task/${date}`,
    deleteTask: (taskId) => baseUrl + `/task/${taskId}`,
    updateTask: (taskId) => baseUrl + `/task/${taskId}`,
  },
  project: {
    getAllProject: baseUrl + "/project",
    createProject: baseUrl + `/project`,
  },
};

export default endpoints;
