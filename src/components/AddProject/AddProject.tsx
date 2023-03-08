import React from "react";
import { useDispatch } from "react-redux";

import {
  AddProjectButton,
  AddProjectButtonAdd,
  AddProjectButtonCancel,
  AddProjectButtons,
  AddProjectInput,
  AddProjectWrapper,
} from "./AddProject.styles";
import { addProject } from "@/store/projectSlicer";

export const AddProject: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [projectName, setProjectName] = React.useState("");
  const dispatch = useDispatch();

  const onOpenAddProjectInputButtonClick = () => {
    setOpen(true);
  };
  const onCancelProjectButtonClick = () => {
    setOpen(false);
    setProjectName("");
  };
  const onProjectNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setProjectName(event.target.value);
  };
  const onAddProjectButtonClick = () => {
    if (projectName === "") {
      alert("Informe um nome para o projeto");
      return;
    }
    dispatch(addProject(projectName));
    onCancelProjectButtonClick();
  };

  return (
    <AddProjectWrapper>
      {!open ? (
        <AddProjectButton
          variant="contained"
          onClick={onOpenAddProjectInputButtonClick}
        >
          Criar Novo Projeto
        </AddProjectButton>
      ) : (
        <React.Fragment>
          <AddProjectInput
            placeholder="Nome do projeto"
            value={projectName}
            onChange={onProjectNameInputChange}
            fullWidth
          />
          <AddProjectButtons>
            <AddProjectButtonAdd
              variant="outlined"
              onClick={onAddProjectButtonClick}
            >
              Adicionar
            </AddProjectButtonAdd>
            <AddProjectButtonCancel
              variant="outlined"
              onClick={onCancelProjectButtonClick}
            >
              Cancelar
            </AddProjectButtonCancel>
          </AddProjectButtons>
        </React.Fragment>
      )}
    </AddProjectWrapper>
  );
};
