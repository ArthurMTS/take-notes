import React from "react";

import {
  TaskBox,
  TaskDate,
  TaskDateBox,
  TaskState,
  TaskTagsBox,
  TaskTitle,
} from "./TaskCard.styles";
import { formatedDate } from "@/utils/date";
import { Tag } from "../AddTask/AddTask.styles";

interface TaskCardProps {
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
  id,
  title,
  state,
  startDate,
  dueDate,
  tags,
}) => {
  return (
    <TaskBox>
      <TaskTagsBox>
        {tags?.map(tag => <Tag key={tag.id}>{tag.text}</Tag>)}
      </TaskTagsBox>
      <TaskTitle>{title}</TaskTitle>
      <TaskState>{state}</TaskState>
      <TaskDateBox>
        <TaskDate>{formatedDate(new Date(startDate))}</TaskDate>
        {dueDate ? <TaskDate>{formatedDate(new Date(dueDate))}</TaskDate> : ""}
      </TaskDateBox>
    </TaskBox>
  );
};
