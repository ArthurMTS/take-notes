import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  TaskBox,
  TaskDate,
  TaskDateBox,
  TaskState,
  TaskTagsBox,
  TaskTitle,
  Tag,
  TaskDeleteButton,
} from "./TaskCard.styles";
import { formatedDate } from "@/utils/date";
import { removeTask } from "@/store/projectSlicer";
import TrashIcon from "@/assets/icons/trash.svg";
import ClockIcon from "@/assets/icons/clock.svg";

interface TaskCardProps {
  projectID: number;
  id: number;
  title: string;
  startDate: Date;
  dueDate?: Date;
  state: "novo" | "em andamento" | "pronto" | string;
  tags?: {
    id: number;
    text: string;
  }[];
}

export const TaskCard: React.FC<TaskCardProps> = ({
  projectID,
  id,
  title,
  state,
  startDate,
  dueDate,
  tags,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemoveTaskButtonClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    if(confirm("Tem certeza que deseja remover essa tarefa?"))
      dispatch(removeTask({ projectID, taskID: id }));
  };
  const onTaskCardClick = () => {
    navigate(`/task/${id}`);
  };

  return (
    <TaskBox onClick={onTaskCardClick}>
      <div>
        <TaskTagsBox className="nobar">
          {tags?.map(tag => (
            <Tag key={tag.id}>{tag.text}</Tag>
          ))}
        </TaskTagsBox>
        <TaskTitle>{title}</TaskTitle>
        <TaskState>{state}</TaskState>
      </div>
      <TaskDateBox>
        <TaskDate>
          <img src={ClockIcon} alt="Clock" />
          <div>
            {formatedDate(new Date(startDate))}
            <p>Data de Início</p>
          </div>
        </TaskDate>
        {dueDate ? (
          <TaskDate>
            <img src={ClockIcon} alt="Clock" />
            <div>
              {formatedDate(new Date(dueDate))}
              <p>Data de Fim</p>
            </div>
          </TaskDate>
        ) : (
          ""
        )}
      </TaskDateBox>
      <TaskDeleteButton src={TrashIcon} onClick={onRemoveTaskButtonClick} />
    </TaskBox>
  );
};
