import { NoteData, ProjectData } from "@/config/types";

interface stateData {
  nextId: number;
  activeProject: number;
  projects: ProjectData[];
  tasksToShow: NoteData[];
  tasks: NoteData[];
}

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

export const setStorage = (state: stateData) => {
  window.localStorage.setItem("state", JSON.stringify(state));
};

export const getStorage = () => {
  const state = window.localStorage.getItem("state");
  if (!state) {
    window.localStorage.setItem("state", JSON.stringify(initialState));
    return initialState;
  } else return JSON.parse(state);
};
