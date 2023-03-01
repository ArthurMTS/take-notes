import React from "react";
import { useDispatch } from "react-redux";

import {
  AddTaskButton,
  DateBox,
  Input,
  Tag,
  TagsBox,
  TaskPopUp,
} from "./AddTask.styles";
import PlusIcon from "@/assets/icons/plus.svg";
import { getDate, getWeekendDate } from "@/utils/date";
import { Button, Typography } from "@mui/material";
import { uniqueID } from "@/utils/generateId";
import { addTask } from "@/store/projectSlicer";

interface AddTaskProps {
  projectID: number;
}

export const AddTask: React.FC<AddTaskProps> = ({ projectID }) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState<Date | string | undefined>(
    getDate(),
  );
  const [dueDate, setDueDate] = React.useState<Date | string | undefined>();
  const [tags, setTags] = React.useState<{ id: number; text: string }[]>([]);
  const [tag, setTag] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    clearForm();
  }, [projectID]);

  const onAddTaskButtonClick = () => {
    setOpen(true);
  };
  const onTaskPopUpClose = () => {
    setOpen(false);
  };
  const onTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onDescriptionInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription(event.target.value);
  };
  const onStartDateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStartDate(event.target.value);
  };
  const onDueDateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(event.target.value);
  };
  const onTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };
  const onAddTagButtonClick = () => {
    if (tag === "") return;
    const newList = [...tags];
    newList.push({
      id: uniqueID(),
      text: tag,
    });
    setTags(newList);
    setTag("");
  };
  const onTagNameClick = (id: number) => {
    const newList = tags.filter(tag => tag.id !== id);
    setTags(newList);
  };
  const clearForm = () => {

  };
  const onCreateTaskButtonClick = () => {
    if (title === "") return;
    const newTask = {
      title,
	    description,
	    startDate,
	    dueDate,
	    tags,
    };
    dispatch(addTask({ projectID, task: newTask }));
    clearForm();
  };

  return (
    <React.Fragment>
      <AddTaskButton variant="outlined" onClick={onAddTaskButtonClick}>
        <img src={PlusIcon} alt="plus symbol" />
      </AddTaskButton>
      <TaskPopUp anchor="right" open={open} onClose={onTaskPopUpClose}>
        <Input
          variant="filled"
          label="Título"
          placeholder="Ex.: Projeto de Férias..."
          value={title}
          onChange={onTitleInputChange}
        />
        <Input
          variant="filled"
          label="Descrição"
          placeholder="Dê mais detalhes sobre o projeto..."
          multiline
          rows={4}
          value={description}
          onChange={onDescriptionInputChange}
        />
        <DateBox>
          <Input
            type="date"
            variant="filled"
            label="Data de Início"
            InputProps={{ inputProps: { min: getDate() } }}
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={onStartDateInputChange}
          />
          {projectID !== 1 ? (
            <Input
              type="date"
              variant="filled"
              label="Data de Fim"
              InputProps={{
                inputProps: {
                  min: startDate,
                  max: projectID === 2 ? getWeekendDate() : "",
                },
              }}
              InputLabelProps={{ shrink: true }}
              value={dueDate}
              onChange={onDueDateInputChange}
            />
          ) : (
            ""
          )}
        </DateBox>
        <Typography sx={{ fontSize: 18 }}>Tags:</Typography>
        <TagsBox>
          {tags.map(tag => (
            <Tag
              key={tag.id}
              onClick={() => onTagNameClick(tag.id)}
              title="Clique para remover"
            >
              {tag.text}
            </Tag>
          ))}
        </TagsBox>
        <DateBox>
          <Input
            variant="filled"
            label="Digita a tag desejada"
            placeholder="Ex.: Casa, Trabalho..."
            helperText="Clique na tag para remove-lá"
            value={tag}
            onChange={onTagInputChange}
          />
          <Button variant="outlined" onClick={onAddTagButtonClick}>
            Adicionar Tag
          </Button>
        </DateBox>

        <Button
          variant="contained"
          onClick={onCreateTaskButtonClick}
        >
          Criar Tarefa
        </Button>
      </TaskPopUp>
    </React.Fragment>
  );
};
