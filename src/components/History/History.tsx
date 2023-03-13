import { Drawer } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  EmptyMessage,
  HistoryBox,
  HistoryButton,
  HistoryClean,
  HistoryClose,
  HistoryItem,
} from "./History.styles";
import { cleanHistory } from "@/store/projectSlicer";
import { RootState } from "@/store";
import HistoryIcon from "@/assets/icons/history.png";
import XCircleIcon from "@/assets/icons/x-circle.svg";

interface HistoryProps {}

export const History: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const history = useSelector((state: RootState) => state.projects.history);
  const dispatch = useDispatch();

  const onHistoryButtonClick = () => {
    setOpen(true);
  };
  const onHistoryCloseButtonClick = () => {
    setOpen(false);
  };
  const onHistoryCleanButtonClick = () => {
    if (confirm("Tem certeza que deseja limpar o histórico?"))
      dispatch(cleanHistory());
  };

  return (
    <React.Fragment>
      <HistoryButton
        src={HistoryIcon}
        alt="History icon"
        title="Abrir Histórico"
        onClick={onHistoryButtonClick}
      />
      <Drawer anchor="right" open={open}>
        <HistoryBox className="nobar">
          <HistoryClose
            src={XCircleIcon}
            alt="X circle icon"
            onClick={onHistoryCloseButtonClick}
          />
          {history.length === 0 ? (
            <EmptyMessage>Parece que não tem nenhuma atividade :(</EmptyMessage>
          ) : (
            ""
          )}
          {history.map((item: string, index: number) => (
            <HistoryItem key={index}>{item}</HistoryItem>
          ))}
          <HistoryClean variant="outlined" onClick={onHistoryCleanButtonClick}>
            Limpar Histórico
          </HistoryClean>
        </HistoryBox>
      </Drawer>
    </React.Fragment>
  );
};
