import { createSlice } from "@reduxjs/toolkit";

import { NoteData } from "@/config/types";
import { uniqueID } from "@/utils/generateId";
import { taskFilter } from "@/utils/taskFilter";
import { taskSort } from "@/utils/taskSort";

const initialState = {
  nextId: 3,
  activeProject: 0,
  projects: [
    { id: 0, title: "Caixa de Entrada", deletable: false },
    { id: 1, title: "Hoje", deletable: false },
    { id: 2, title: "Essa Semana", deletable: false },
  ],
  tasksToShow: [] as NoteData[],
  tasks: [] as NoteData[],
};

const projectSlicer = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, { payload }) => {
      const newProject = {
        id: state.nextId,
        title: payload,
        tasks: [],
        deletable: true,
      };
      state.nextId += 1;
      state.projects.push(newProject);
    },
    updateProject: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if (project.id === payload.id) {
          project.title = payload.title;
        }
        return project;
      });
    },
    removeProject: (state, { payload }) => {
      state.projects = state.projects.filter(project => project.id !== payload);
      state.tasks = state.tasks.filter(task => task.projectID !== payload);
      state.tasksToShow = state.tasksToShow.filter(task => task.projectID !== payload);
    },
    changeProject: (state, { payload }) => {
      state.activeProject = payload;
      state.tasksToShow = taskFilter(payload, state.tasks).sort(taskSort);
    },
    addTask: (state, { payload }) => {
      const newTask: NoteData = {
        id: uniqueID(),
        ...payload.task,
        state: "novo",
        priority: "normal",
      };
      state.tasks.push(newTask);
      state.tasksToShow.push(newTask);
      state.tasksToShow = state.tasksToShow.sort(taskSort);
    },
    updateTask: (state, { payload }) => {
      const findAndUpdate = (task: NoteData) => {
        if (task.id === payload.taskID) {
          const newTask = {
            ...task,
            ...payload.task,
          };
          task = newTask;
        }
        return task;
      };
      state.tasks = state.tasks.map(findAndUpdate);
      state.tasksToShow = state.tasksToShow.map(findAndUpdate);
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(task => task.id !== payload.taskID);
      state.tasksToShow = state.tasksToShow.filter(task => task.id !== payload.taskID);
    },
  },
});

export const {
  addProject,
  updateProject,
  removeProject,
  changeProject,
  addTask,
  updateTask,
  removeTask,
} = projectSlicer.actions;

export default projectSlicer.reducer;
