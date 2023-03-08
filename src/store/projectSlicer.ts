import { createSlice } from "@reduxjs/toolkit";

import { NoteData, ProjectData } from "@/config/types";
import { uniqueID } from "@/utils/generateId";
import { taskFilter } from "@/utils/taskFilter";
import { taskSort } from "@/utils/taskSort";
import { getStorage, setStorage } from "@/utils/storage";

const initialState = getStorage();

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
      setStorage(state);
    },
    updateProject: (state, { payload }) => {
      state.projects = state.projects.map((project: ProjectData) => {
        if (project.id === payload.id) {
          project.title = payload.title;
        }
        return project;
      });
      setStorage(state);
    },
    removeProject: (state, { payload }) => {
      state.projects = state.projects.filter(
        (project: ProjectData) => project.id !== payload,
      );
      state.tasks = state.tasks.filter(
        (task: NoteData) => task.projectID !== payload,
      );
      state.tasksToShow = state.tasksToShow.filter(
        (task: NoteData) => task.projectID !== payload,
      );
      setStorage(state);
    },
    changeProject: (state, { payload }) => {
      state.activeProject = payload;
      state.tasksToShow = taskFilter(payload, state.tasks).sort(taskSort);
      setStorage(state);
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
      setStorage(state);
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
      setStorage(state);
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(
        (task: NoteData) => task.id !== payload.taskID,
      );
      state.tasksToShow = state.tasksToShow.filter(
        (task: NoteData) => task.id !== payload.taskID,
      );
      setStorage(state);
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
