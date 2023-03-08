import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ClickAwayListener } from "@mui/material";

import {
  HorizontalLine,
  MainBox,
  MainProjectTitle,
  MainTaskList,
  UpdateButton,
  UpdateTitleBox,
  UpdateTitleInput,
} from "./Main.styles";
import { RootState } from "@/store";
import { updateProject, changeProject } from "@/store/projectSlicer";
import { AddTask } from "@/components/AddTask";
import { TaskCard } from "@/components/TaskCard";
import { NoteData, ProjectData } from "@/config/types";

export const Main: React.FC = () => {
  const [update, setUpdate] = React.useState(false);
  const [project, tasksToShow] = useSelector(
    (state: RootState): [ProjectData, NoteData[]] => {
      const project =
        state.projects.projects.find(
          (project: ProjectData) => project.id === state.projects.activeProject,
        ) || state.projects.projects[0];

      return [project, state.projects.tasksToShow];
    },
  );
  const [projectTitle, setProjectTitle] = React.useState(project?.title);
  const [tasks, setTasks] = React.useState(tasksToShow);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setProjectTitle(project?.title);
    setTasks(tasksToShow);

    if (!project) dispatch(changeProject(0));
  }, [project, tasksToShow]);

  const onTitleClick = () => {
    if (project?.deletable) setUpdate(true);
  };
  const onClickAwayTitle = () => {
    setUpdate(false);
    setProjectTitle(project?.title);
  };
  const onProjectTitleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setProjectTitle(event.target.value);
  };
  const onUpdateButtonClick = () => {
    dispatch(updateProject({ id: project?.id, title: projectTitle }));
    onClickAwayTitle();
  };

  return (
    <MainBox>
      {!update ? (
        <MainProjectTitle
          onClick={onTitleClick}
          title={project?.deletable ? "Clique para renomear" : ""}
        >
          {project?.title}
        </MainProjectTitle>
      ) : (
        <ClickAwayListener onClickAway={onClickAwayTitle}>
          <UpdateTitleBox>
            <UpdateTitleInput
              value={projectTitle}
              onChange={onProjectTitleInputChange}
            />
            <UpdateButton variant="contained" onClick={onUpdateButtonClick}>
              Salvar
            </UpdateButton>
          </UpdateTitleBox>
        </ClickAwayListener>
      )}
      <HorizontalLine />
      <MainTaskList className="nobar">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            projectID={project?.id}
            id={task.id}
            title={task.title}
            state={task.state}
            startDate={task.startDate}
            dueDate={task.dueDate}
            tags={task.tags}
          />
        ))}
      </MainTaskList>
      {project?.id < 1 || project?.id > 2 ? (
        <AddTask projectID={project?.id || 0} />
      ) : (
        ""
      )}
    </MainBox>
  );
};
