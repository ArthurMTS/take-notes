import { Tag } from "@/components/AddTask/AddTask.styles";
import { HorizontalLine } from "@/components/Main/Main.styles";
import { TaskDate, TaskTagsBox } from "@/components/TaskCard/TaskCard.styles";
import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const TaskBox = styled("div")({
  width: "40vw",
  margin: "10px auto",
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

export const Div = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
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
});

export const TaskDescription = styled(Typography)({
  height: 270,
  padding: 10,
  backgroundColor: "#F7F7F7",
  overflowY: "scroll",
  cursor: "pointer",
  borderRadius: 10,
});

export const TaskDateItem = styled(TaskDate)({
  fontSize: 18,
  cursor: "pointer",
  gap: 15,
  "& div p": {
    fontSize: 14,
  },
  marginRight: 20,
});

export const TagBox = styled(TaskTagsBox)({
  width: "100%",
  gap: 10,
});

export const TagItem = styled(Tag)({

});

export const HZ = styled(HorizontalLine)({
  width: "100%",
});

export const TaskState = styled(TextField)({
  width: 250,
});

export const TaskPriority = styled(TextField)({
  width: 150,
});
