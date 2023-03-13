import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RootState } from "@/store";
import { NoteData, Tag } from "@/config/types";
import {
  TaskBox,
  TaskPriority,
  TaskState,
  TaskTitle,
  TagBox,
  TagItem,
  Div,
  TaskDescription,
  HZ,
  BackButton,
  Button,
} from "./Task.styles";
import { MenuItem } from "@mui/material";
import ChevronIcon from "@/assets/icons/chevron-left.svg";
import { uniqueID } from "@/utils/generateId";
import { updateTask } from "@/store/projectSlicer";
import { EditField } from "@/components/EditField";
import { ShowDate } from "@/components/ShowDate";

export const Task: React.FC = () => {
  const [task, setTask] = React.useState<NoteData>({} as NoteData);
  const [projectID, tasks] = useSelector(
    (state: RootState): [number, NoteData[]] => {
      return [state.projects.activeProject, state.projects.tasksToShow];
    },
  );
  const taskID = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const task = tasks.filter(task => task.id === +taskID)[0];
    if (!task) navigate("/");
    setTask(task);
  }, [tasks, projectID, taskID, navigate]);

  const onBackButtonClick = () => {
    navigate("/");
  };
  const onAddTag = (value: string) => {
    const newTags: Tag[] = task?.tags?.map(tag => tag) || ([] as Tag[]);
    newTags.push({ id: uniqueID(), text: value });
    dispatch(
      updateTask({ projectID, taskID: task?.id, task: { tags: newTags } }),
    );
  };
  const onDeleteTag = (tagID: number) => {
    const newTags: Tag[] =
      task?.tags?.filter(tag => tag.id !== tagID) || ([] as Tag[]);
    dispatch(
      updateTask({ projectID, taskID: task?.id, task: { tags: newTags } }),
    );
  };
  const onUpdateTitle = (value: string) => {
    dispatch(
      updateTask({ projectID, taskID: task?.id, task: { title: value } }),
    );
  };
  const onUpdateDescription = (value: string) => {
    dispatch(
      updateTask({ projectID, taskID: task?.id, task: { description: value } }),
    );
  };
  const onStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateTask({
        projectID,
        taskID: task?.id,
        task: { state: event.target.value },
      }),
    );
  };
  const onPriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateTask({
        projectID,
        taskID: task?.id,
        task: { priority: event.target.value },
      }),
    );
  };
  const onDateChange = (id: string, value: string) => {
    dispatch(
      updateTask({
        projectID,
        taskID: task?.id,
        task: { [id]: value },
      }),
    );
  };

  return (
    <React.Fragment>
      <Header />
      <TaskBox className="nobar">
        <BackButton src={ChevronIcon} onClick={onBackButtonClick} />
        <Div>
          <TagBox>
            {task?.tags?.map(tag => (
              <TagItem
                key={tag.id}
                title="Clique para remover"
                onClick={() => onDeleteTag(tag.id)}
              >
                {tag.text}
              </TagItem>
            ))}
          </TagBox>

          <EditField
            buttonLabel="Adicionar"
            placeholder="Nome da Tag"
            onEdit={onAddTag}
            defaultValue=""
          >
            <Button variant="outlined">Adicionar Tag</Button>
          </EditField>
        </Div>
        <Div>
          <EditField
            buttonLabel="Salvar"
            placeholder="Novo Título"
            onEdit={onUpdateTitle}
            defaultValue={task?.title}
          >
            <TaskTitle>{task?.title}</TaskTitle>
          </EditField>
          <TaskState
            label="Estado"
            value={task?.state || "novo"}
            onChange={onStateChange}
            select
          >
            <MenuItem value="novo">Novo</MenuItem>
            <MenuItem value="em andamento">Em Andamento</MenuItem>
            <MenuItem value="pronto">Pronto</MenuItem>
          </TaskState>
        </Div>
        <Div>
          <TaskPriority
            label="Prioridade"
            value={task?.priority || "normal"}
            onChange={onPriorityChange}
            select
          >
            <MenuItem value="baixa">Baixa</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="alta">Alta</MenuItem>
          </TaskPriority>
          <Div>
            <ShowDate
              startDate={task?.startDate}
              dueDate={task?.dueDate}
              editable={true}
              onEdit={onDateChange}
            />
          </Div>
        </Div>
        <HZ />
        <EditField
          buttonLabel="Salvar"
          placeholder="Digite sua descrição..."
          onEdit={onUpdateDescription}
          defaultValue={task?.description}
        >
          <TaskDescription className="nobar">
            {task?.description
              ? task?.description
              : "Está um pouco vazio... clique e descreva mais sua tarefa!"}
          </TaskDescription>
        </EditField>
      </TaskBox>
      <Footer />
    </React.Fragment>
  );
};
