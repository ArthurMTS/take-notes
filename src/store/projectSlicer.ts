import { createSlice } from "@reduxjs/toolkit";

import { NoteData, ProjectData } from "@/config/types";
import { uniqueID } from "@/utils/generateId";
import { taskFilter } from "@/utils/taskFilter";
import { taskSort } from "@/utils/taskSort";
import { getStorage, setStorage } from "@/utils/storage";
import { formatedDate } from "@/utils/date";

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
      state.history.push(`Projeto [${newProject.title.toUpperCase()}] Criado`);
      setStorage(state);
    },
    updateProject: (state, { payload }) => {
      state.projects = state.projects.map((project: ProjectData) => {
        if (project.id === payload.id) {
          state.history.push(
            `Projeto [${project.title.toUpperCase()}] renomeado para [${payload.title.toUpperCase()}]`,
          );
          project.title = payload.title;
        }
        return project;
      });
      setStorage(state);
    },
    removeProject: (state, { payload }) => {
      state.projects = state.projects.filter((project: ProjectData) => {
        if (project.id !== payload) return project;
        else
          state.history.push(
            `Projeto [${project.title.toUpperCase()}] Removido`,
          );
      });
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
      state.history.push(
        `Tarefa [${newTask.title.toUpperCase()}] Criado (Inicia em: ${formatedDate(
          newTask.startDate,
        )})`,
      );
      setStorage(state);
    },
    updateTask: (state, { payload }) => {
      const findAndUpdate = (task: NoteData) => {
        if (task.id === payload.taskID) {
          const newTask = {
            ...task,
            ...payload.task,
          };
          state.history.push(
            `Tarefa [${task.title.toUpperCase()}] atualizada com ${JSON.stringify(
              payload.task,
            )}`,
          );
          task = newTask;
        }
        return task;
      };
      state.tasks = state.tasks.map(findAndUpdate);
      state.tasksToShow = state.tasksToShow.map(findAndUpdate);
      setStorage(state);
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task: NoteData) => {
        if (task.id !== payload.taskID) return task;
        else
          state.history.push(`Tarefa [${task.title.toUpperCase()}] Removida`);
      });
      state.tasksToShow = state.tasksToShow.filter(
        (task: NoteData) => task.id !== payload.taskID,
      );
      setStorage(state);
    },
    cleanHistory: state => {
      state.history = [];
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
  cleanHistory,
} = projectSlicer.actions;

export default projectSlicer.reducer;
