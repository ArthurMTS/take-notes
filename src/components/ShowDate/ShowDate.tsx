import React from "react";
import { useSelector } from "react-redux";
import { ClickAwayListener } from "@mui/material";

import { TaskDate, TaskDateBox } from "./ShowDate.styles";
import { Input } from "../AddTask/AddTask.styles";
import { formatedDate, getDate, getWeekendDate } from "@/utils/date";
import { RootState } from "@/store";
import ClockIcon from "@/assets/icons/clock.svg";

interface ShowDateProps {
  startDate: string;
  dueDate: string | undefined;
  editable: boolean;
  onEdit?: (id: string, value: string) => void;
}

interface DateComponentProps {
  date: string;
  label: string;
  onClick: () => void;
}

const DateComponent: React.FC<DateComponentProps> = ({
  date,
  label,
  onClick,
}) => (
  <TaskDate onClick={onClick}>
    <img src={ClockIcon} alt="Clock" />
    <div>
      {formatedDate(date)}
      <p>{label}</p>
    </div>
  </TaskDate>
);

export const ShowDate: React.FC<ShowDateProps> = ({
  startDate,
  dueDate,
  editable,
  onEdit = () => {},
}) => {
  const projectID = useSelector(
    (state: RootState) => state.projects.activeProject,
  );
  const [start, setStart] = React.useState(false);
  const [due, setDue] = React.useState(false);

  const onStartDateClick = () => {
    setStart(true);
  };
  const onDueDateClick = () => {
    setDue(true);
  };
  const onClickAwayStart = () => {
    setStart(false);
  };
  const onClickAwayDue = () => {
    setDue(false);
  };
  const onDateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event?.target?.attributes[1]?.nodeValue || "";
    onEdit(id, event.target.value);
  };

  return (
    <TaskDateBox>
      {!start ? (
        <DateComponent
          onClick={onStartDateClick}
          date={startDate}
          label="Data de Início"
        />
      ) : (
        <ClickAwayListener onClickAway={onClickAwayStart}>
          <Input
            id="startDate"
            type="date"
            label="Data de Início"
            InputProps={{
              inputProps: {
                min: getDate(),
                max: projectID === 2 ? getWeekendDate() : "",
              },
            }}
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={onDateInputChange}
          />
        </ClickAwayListener>
      )}
      {dueDate ? (
        !due ? (
          <DateComponent
            onClick={onDueDateClick}
            date={dueDate}
            label="Data de Fim"
          />
        ) : (
          <ClickAwayListener onClickAway={onClickAwayDue}>
            <Input
              id="dueDate"
              type="date"
              label="Data de Fim"
              InputProps={{
                inputProps: {
                  min: startDate,
                  max: projectID === 2 ? getWeekendDate() : "",
                },
              }}
              InputLabelProps={{ shrink: true }}
              value={dueDate}
              onChange={onDateInputChange}
            />
          </ClickAwayListener>
        )
      ) : projectID !== 1 && editable ? (
        !due ? (
          <img src={ClockIcon} alt="Clock" onClick={onDueDateClick} />
        ) : (
          <ClickAwayListener onClickAway={onClickAwayDue}>
            <Input
              id="dueDate"
              type="date"
              label="Data de Fim"
              InputProps={{
                inputProps: {
                  min: startDate || getDate(),
                  max: projectID === 2 ? getWeekendDate() : "",
                },
              }}
              InputLabelProps={{ shrink: true }}
              value={dueDate}
              onChange={onDateInputChange}
            />
          </ClickAwayListener>
        )
      ) : (
        ""
      )}
    </TaskDateBox>
  );
};
