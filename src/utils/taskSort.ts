import { NoteData } from "@/config/types";

export const taskSort = (a: NoteData, b: NoteData) => {
  const dateA = new Date(a.startDate).getTime();
  const dateB = new Date(b.startDate).getTime();

  if (dateA < dateB) return -1;
  else if (dateA > dateB) return 1;
  else return 0;
};
