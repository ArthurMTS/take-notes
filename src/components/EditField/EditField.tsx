import { Button, Div } from "@/views/Task/Task.styles";
import { ClickAwayListener } from "@mui/material";
import React from "react";
import { ChangeInput } from "./EditField.styles";

interface EditField {
  onEdit: (value: string) => void;
  placeholder: string;
  defaultValue?: string;
  children?: React.ReactNode;
  buttonLabel: string;
}

export const EditField: React.FC<EditField> = ({
  placeholder,
  defaultValue = "",
  children,
  onEdit,
  buttonLabel,
}) => {
  const [edit, setEdit] = React.useState(false);
  const [input, setInput] = React.useState(defaultValue);

  const onClickAway = () => {
    setEdit(false);
    setInput(defaultValue);
  };
  const onChildrenClick = () => {
    setEdit(true);
  };
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const onUpdateButtonClick = () => {
    if (input === "") return;
    onEdit(input);
    onClickAway();
    setInput(defaultValue);
  };

  return (
    <React.Fragment>
      {edit ? (
      <ClickAwayListener onClickAway={onClickAway}>
        <Div>
          <ChangeInput
            placeholder={placeholder}
            value={input}
            onChange={onInputChange}
            multiline
          />
          <Button variant="outlined" onClick={onUpdateButtonClick}>
            {buttonLabel}
          </Button>
        </Div>
      </ClickAwayListener>
      ) : (<Div onClick={onChildrenClick}>{children}</Div>)}
    </React.Fragment>
  );
};
