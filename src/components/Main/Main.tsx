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

export const Main: React.FC = () => {
  const [update, setUpdate] = React.useState(false);
  const project = useSelector((state: RootState) => {
    return state.projects.projects.find(
      project => project.id === state.projects.activeProject,
    );
  });
  const [projectTitle, setProjectTitle] = React.useState(project?.title);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setProjectTitle(project?.title);

    if (!project)
      dispatch(changeProject(0));
  }, [project]);

  const onTitleClick = () => {
    if (project?.deletable) setUpdate(true);
  };
  const onClickAwayTitle = () => {
    setUpdate(false);
    setProjectTitle(project?.title);
  };
  const onProjectTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectTitle(event.target.value);
  };
  const onUpdateButtonClick = () => {
    dispatch(updateProject({ id: project?.id, title: projectTitle }));
    onClickAwayTitle();
  };

  return (
    <MainBox>
      {!update ? (
        <MainProjectTitle onClick={onTitleClick}>
          {project?.title}
        </MainProjectTitle>
      ) : (
        <ClickAwayListener onClickAway={onClickAwayTitle}>
          <UpdateTitleBox>
            <UpdateTitleInput
              value={projectTitle}
              onChange={onProjectTitleInputChange}
            />
            <UpdateButton
              variant="contained"
              onClick={onUpdateButtonClick}
            >
              Salvar
            </UpdateButton>
          </UpdateTitleBox>
        </ClickAwayListener>
      )}
      <HorizontalLine />
      <MainTaskList>
        {project?.tasks.map(task => <p>{task.title}</p>)}
      </MainTaskList>
      <AddTask projectID={project?.id || 0} />
    </MainBox>
  );
};
