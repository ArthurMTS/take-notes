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
  "@media (max-width: 850px)": {
    width: "75vw",
  },
  "@media (max-width: 340px)": {
    width: "70vw",
  },
  backgroundColor: "#353535",
});

export const MainProjectTitle = styled(Typography)({
  fontSize: 26,
  textAlign: "center",
  margin: "10px 0",
  cursor: "pointer",
  textTransform: "capitalize",
  color: "#FFF",
  "@media (max-width: 340px)": {
    fontSize: 14,
    margin: "5px 0",
  },
});

export const HorizontalLine = styled("hr")({
  borderBottom: "3px solid #374ebf",
  width: "80%",
  "@media (max-width: 340px)": {
    borderBottom: "1px solid #374ebf",
  },
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
    color: "#FFF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F7F7F7",
    },
    "&:hover fieldset": {
      borderColor: "#374ebf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#374ebf",
    },
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
  overflowY: "scroll",
  justifyContent: "center",
  "@media (max-width: 707px)": {
    alignItems: "center",
  },
});
