import { NoteData } from "@/config/types";
import { getDate, getWeekendDate } from "./date";

export const taskFilter = (projectID: number, tasks: NoteData[]) => {
  switch (projectID) {
    case 0:
      return [...tasks];
    case 1:
      return tasks.filter(task => {
        const taskDate = new Date(task.startDate).getTime();
        const todayDate = new Date(getDate()).getTime();
        if (taskDate === todayDate) return task;
      });
    case 2:
      return tasks.filter(task => {
        const taskDate = new Date(task.startDate).getTime();
        const todayDate = new Date(getDate()).getTime();
        const weekEndDate = new Date(getWeekendDate()).getTime();
        if (taskDate >= todayDate && taskDate <= weekEndDate) return task;
      });
    default:
      return tasks.filter(task => task.projectID === projectID);
  }
};
