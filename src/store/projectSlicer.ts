import { createSlice } from "@reduxjs/toolkit";

import { NoteData } from "@/config/types";
import { uniqueID } from "@/utils/generateId";

const initialState = {
  nextId: 3,
  projects: [
    { id: 0, title: "Caixa de Entrada", tasks: [] as NoteData[], deletable: false },
    { id: 1, title: "Hoje", tasks: [] as NoteData[], deletable: false },
    { id: 2, title: "Essa Semana", tasks: [] as NoteData[], deletable: false },
  ],
}

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
    },
    addTask: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if (project.id === payload.projectID) {
          const newTask: NoteData = {
            id: uniqueID(),
            ...payload.task,
            state: "novo",
            priority: "normal",
          };

          project.tasks.push(newTask);
        }

        return project;
      });
    },
    updateTask: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if (project.id === payload.projectID) {
          project.tasks = project.tasks.map(task => {
            if (task.id === payload.taskID) {
              const newTask = {
                ...task,
                ...payload.task,
              }

              task = newTask
            }

            return task;
          })
        }

        return project;
      });
    },
    removeTask: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if (project.id === payload.projectID)
          project.tasks = project.tasks.filter(task => task.id !== payload.taskID);

        return project;
      });
    },
  },
});

export const { 
  addProject,
  updateProject,
  removeProject,
  addTask,
  updateTask,
  removeTask,
} = projectSlicer.actions;

export default projectSlicer.reducer;
