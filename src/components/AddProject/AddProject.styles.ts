import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const AddProjectWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 10px",
});

export const AddProjectInput = styled(TextField)({
  "& input": {
    color: "#FFF",
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#374ebf',
    },
    '&:hover fieldset': {
      borderColor: '#374ebf',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#374ebf',
    },
  },
});

export const AddProjectButton = styled(Button)({
  backgroundColor: "#374ebf",
  color: "#E7E7E7",
  "&:hover": {
    backgroundColor: "#374ebf",
  },
});

export const AddProjectButtons = styled("div")({
  display: "flex",
  marginTop: 10,
  gap: 10,
});

export const AddProjectButtonAdd = styled(Button)({
  borderColor: "#374ebf",
  color: "#374ebf",
  "&:hover": {
    borderColor: "#374ebf",
    color: "#E7E7E7",
    backgroundColor: "#374ebf",
  },
});

export const AddProjectButtonCancel = styled(Button)({
  borderColor: "#e51d33",
  color: "#e51d33",
  "&:hover": {
    borderColor: "#e51d33",
    color: "#E7E7E7",
    backgroundColor: "#e51d33",
  },
});