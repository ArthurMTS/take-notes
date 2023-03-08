import { Tag } from "@/components/AddTask/AddTask.styles";
import { HorizontalLine } from "@/components/Main/Main.styles";
import { TaskDate, TaskTagsBox } from "@/components/TaskCard/TaskCard.styles";
import { Button as MuiButton, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const TaskBox = styled("div")({
  width: "40vw",
  margin: "10px auto",
  display: "flex",
  flexDirection: "column",
  gap: 20,
  position: "relative",
  "@media (max-width: 1115px)": {
    width: "80vw",
  },
  "@media (max-width: 470px)": {
    width: "95vw",
  },
  overflow: "scroll",
});

export const BackButton = styled("img")({
  width: 35,
  height: 35,
  cursor: "pointer",
  position: "absolute",
  left: -80,
  top: -5,
  transition: "all .2s",
  "&:hover": {
    transform: "scale(1.5)",
  },
  "@media (max-width: 340px)": {
    left: 0,
  },
});

export const Button = styled(MuiButton)({
  color: "#374ebf",
  borderColor: "#374ebf",
  "@media (max-width: 340px)": {
    fontSize: 10,
    padding: 5,
  },
});

export const Div = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
  "@media (max-width: 360px)": {
    flexDirection: "column",
    gap: 2,
  },
});

export const TaskTitle = styled(Typography)({
  width: "100%",
  fontSize: 26,
  fontWeight: 700,
  textTransform: "capitalize",
  cursor: "pointer",
  "&:hover:after": {
    content: '" 🖊️"',
  },
  "@media (max-width: 470px)": {
    "&:hover:after": {
      content: '""',
    },
  },
  "@media (max-width: 340px)": {
    marginTop: -15,
  },
});

export const TaskDescription = styled(Typography)({
  width: "100%",
  height: 270,
  padding: 10,
  backgroundColor: "#F7F7F7",
  overflowY: "scroll",
  cursor: "pointer",
  borderRadius: 10,
  wordWrap: "break-word",
  "@media (max-width: 360px)": {
    minHeight: 140,
    height: 0,
  },
});

export const TaskDateItem = styled(TaskDate)({
  fontSize: 18,
  cursor: "pointer",
  gap: 15,
  "& div p": {
    fontSize: 14,
    fontFamily: "sans-serif",
  },
  marginRight: 20,
  "@media (max-width: 340px)": {
    fontSize: 16,
    "& div p": {
      fontSize: 12,
    },
  },
});

export const TagBox = styled(TaskTagsBox)({
  width: "55%",
  gap: 10,
  "@media (max-width: 340px)": {
    width: "70%",
  },
});

export const TagItem = styled(Tag)({
  textTransform: "capitalize",
});

export const HZ = styled(HorizontalLine)({
  width: "100%",
});

export const TaskState = styled(TextField)({
  width: 250,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& label": {
    color: "#374ebf",
    fontWeight: 700,
    fontSize: 18,
  },
  "@media (max-width: 360px)": {
    width: "100%",
  },
});

export const TaskPriority = styled(TextField)({
  width: 150,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& label": {
    color: "#374ebf",
    fontWeight: 700,
    fontSize: 18,
  },
  "@media (max-width: 360px)": {
    width: "100%",
  },
});
