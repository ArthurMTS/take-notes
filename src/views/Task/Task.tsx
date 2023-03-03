import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RootState } from "@/store";
import { NoteData, ProjectData } from "@/config/types";
import {
  TaskBox,
  TaskDateItem,
  TaskPriority,
  TaskState,
  TaskTitle,
  TagBox,
  TagItem,
  Div,
  TaskDescription,
  HZ,
} from "./Task.styles";
import { formatedDate } from "@/utils/date";
import { MenuItem } from "@mui/material";
import ClockIcon from "@/assets/icons/clock.svg";

export const Task: React.FC = () => {
  const [task, setTask] = React.useState<NoteData>({} as NoteData);
  const [projectID, projects] = useSelector(
    (state: RootState): [number, ProjectData[]] => {
      return [state.projects.activeProject, state.projects.projects];
    },
  );
  const taskID = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  React.useEffect(() => {
    const project = projects.filter(project => project.id === projectID)[0];
    const task = project.tasks.filter(task => task.id === +taskID)[0];
    if (!task) navigate("/");
    setTask(task);
  });

  return (
    <React.Fragment>
      <Header />
      <TaskBox>
        <TagBox className="nobar">
          {task?.tags?.map(tag => (
            <TagItem key={tag.id}>{tag.text}</TagItem>
          ))}
        </TagBox>
        <Div>
          <TaskTitle>{task?.title}</TaskTitle>
          <TaskState label="Estado" select value={task?.state}>
            <MenuItem value="novo">Novo</MenuItem>
            <MenuItem value="em andamento">Em Andamento</MenuItem>
            <MenuItem value="pronto">Pronto</MenuItem>
          </TaskState>
        </Div>
        <Div>
          <TaskPriority label="Prioridade" select value={task?.priority}>
            <MenuItem value="baixa">Baixa</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="alta">Alta</MenuItem>
          </TaskPriority>
          <Div>
            <Div>
              <TaskDateItem>
                <img src={ClockIcon} alt="Clock" />
                <div>
                  {formatedDate(new Date(task?.startDate))}
                  <p>Data de Início</p>
                </div>
              </TaskDateItem>
              {task?.dueDate ? (
                <TaskDateItem>
                  <img src={ClockIcon} alt="Clock" />
                  <div>
                    {formatedDate(new Date(task?.dueDate))}
                    <p>Data de Fim</p>
                  </div>
                </TaskDateItem>
              ) : (
                ""
              )}
            </Div>
          </Div>
        </Div>
        <HZ />
        <TaskDescription className="nobar">
          {task?.description
            ? task?.description
            : "Está um pouco vazio... clique e descreva mais sua tarefa!"}
        </TaskDescription>
      </TaskBox>
      <Footer />
    </React.Fragment>
  );
};
