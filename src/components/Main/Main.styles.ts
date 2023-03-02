import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const MainBox = styled("div")({
  width: "80vw",
  height: "calc(100vh - 118px)",
  position: "absolute",
  right: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const MainProjectTitle = styled(Typography)({
  fontSize: 26,
  textAlign: "center",
  margin: "10px 0",
  cursor: "pointer",
});

export const HorizontalLine = styled("hr")({
  borderBottom: "3px solid #374ebf",
  width: "80%"
});

export const UpdateTitleBox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

export const UpdateTitleInput = styled(TextField)({
  margin: "10px 0",
  "& input": {
    padding: "10px",
  },
});

export const UpdateButton = styled(Button)({
  backgroundColor: "#3faf82",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#3faf82",
  },
});

export const MainTaskList = styled("ul")({
  width: "100%",
  padding: 20,
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
});
