import { Button, Drawer, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const AddTaskButton = styled(Button)({
  borderRadius: "50%",
  height: 64,
  borderWidth: 5,
  padding: 0,
  borderColor: "#374ebf",
  opacity: 0.8,
  transition: "all .2s",
  position: "absolute",
  right: 10,
  bottom: 10,
  "&:hover": {
    borderWidth: 5,
    borderColor: "#374ebf",
    opacity: 1,
  },
  "& img": {
    width: 35,
    height: 35,
  },
  "@media (max-width: 340px)": {
    "& img": {
      width: 25,
      height: 25,
    },
    bottom: -10,
  },
});

export const TaskPopUp = styled(Drawer)({
  "& .MuiPaper-root": {
    width: "25vw",
    padding: "15px 10px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  "@media (max-width: 1000px)": {
    "& .MuiPaper-root": {
      width: "40vw",
    },
  },
  "@media (max-width: 780px)": {
    "& .MuiPaper-root": {
      width: "60vw",
    },
  },
  "@media (max-width: 580px)": {
    "& .MuiPaper-root": {
      width: "70vw",
    },
  },
  "@media (max-width: 340px)": {
    "& .MuiPaper-root": {
      width: "80vw",
    },
  },
});

export const Input = styled(TextField)({
  width: "100%",
});

export const DateBox = styled("div")({
  display: "flex",
  gap: 10,
});

export const TagsBox = styled("ul")({
  display: "flex",
  gap: 10,
  overflowX: "scroll",
  padding: 5,
});

export const Tag = styled("li")({
  fontSize: 18,
  listStyle: "none",
  cursor: "pointer",
  fontStyle: "italic",
  backgroundColor: "#374ebf",
  color: "#F7F7F7",
  padding: "0 5px",
  borderRadius: 50,
  transition: "all .2s",
  "&:hover": {
    textDecoration: "line-through",
    backgroundColor: "#e51d33",
  },
});
